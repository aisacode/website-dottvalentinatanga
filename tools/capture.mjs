// Full-page / viewport screenshot through the Chrome DevTools Protocol.
// usage: node capture.mjs <url> <out.png> <width> <height> <mobile 0|1> <full 0|1>
import { spawn } from 'node:child_process';
import { writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const [url, out, w, h, mobile, full] = process.argv.slice(2);
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const port = 9400 + Math.floor(Math.random() * 400);
const profile = mkdtempSync(join(tmpdir(), 'cdp-profile-'));
const chrome = spawn(CHROME, [
  '--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run',
  `--user-data-dir=${profile}`, `--remote-debugging-port=${port}`,
  '--window-size=1440,900', 'about:blank',
], { stdio: 'ignore' });

async function target() {
  let lastErr = null;
  for (let i = 0; i < 200; i++) {
    try {
      const list = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
      const page = list.find(t => t.type === 'page');
      if (page) return page.webSocketDebuggerUrl;
      lastErr = 'no page in ' + JSON.stringify(list).slice(0, 200);
    } catch (e) { lastErr = String(e && e.cause ? e.cause : e); }
    await new Promise(r => setTimeout(r, 150));
  }
  throw new Error('no page target: ' + lastErr);
}

const ws = new WebSocket(await target());
await new Promise(r => (ws.onopen = r));
let seq = 0;
const pending = new Map();
ws.onmessage = ev => {
  const m = JSON.parse(ev.data);
  if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); }
};
const send = (method, params = {}) => new Promise(res => {
  const id = ++seq; pending.set(id, res); ws.send(JSON.stringify({ id, method, params }));
});

await send('Emulation.setDeviceMetricsOverride', { width: +w, height: +h, deviceScaleFactor: 1, mobile: mobile === '1' });
await send('Page.enable');
await send('Page.navigate', { url });
await new Promise(r => setTimeout(r, 5500));
const metrics = await send('Page.getLayoutMetrics');
let contentH = Math.ceil(metrics.result.cssContentSize.height);
if (full === '1') {
  // Grow the viewport itself to the document height so fixed backgrounds and
  // fixed bars paint where a visitor sees them, then capture the viewport.
  await send('Emulation.setDeviceMetricsOverride', { width: +w, height: contentH, deviceScaleFactor: 1, mobile: mobile === '1' });
  await new Promise(r => setTimeout(r, 1200));
  const again = await send('Page.getLayoutMetrics');
  const h2 = Math.ceil(again.result.cssContentSize.height);
  if (h2 !== contentH) {
    contentH = h2;
    await send('Emulation.setDeviceMetricsOverride', { width: +w, height: contentH, deviceScaleFactor: 1, mobile: mobile === '1' });
    await new Promise(r => setTimeout(r, 800));
  }
}
const shot = await send('Page.captureScreenshot', { format: 'png' });
writeFileSync(out, Buffer.from(shot.result.data, 'base64'));
console.log(`${out} ${w}x${full === '1' ? contentH : h}`);
ws.close();
chrome.kill();
