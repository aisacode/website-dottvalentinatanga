---
name: Dott.ssa Valentina Tanga
description: The treatment room as a website; sage curtain ground with ink text, paper sheets for reading, scrub blue only where you act.
colors:
  sage: "#9db09a"
  sage-fold: "#7f9480"
  sage-deep: "#3e5244"
  moss: "#5c7360"
  sage-light: "#c3d0bf"
  sage-pale: "#dce5d8"
  rail: "#2f3f34"
  paper: "#f7f5f0"
  paper-shade: "#e8e6de"
  ink: "#1f2b23"
  ink-soft: "#4a5a4e"
  scrub-blue: "#2b5da8"
  scrub-blue-deep: "#234c8a"
  steel: "#aeb6bb"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.5rem, 1.6rem + 3.5vw, 4.25rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.012em"
  page-title:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.6rem, 1.8rem + 3vw, 4.25rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.012em"
  headline:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2rem, 1.3rem + 2.2vw, 3.1rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  quote:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(1.7rem, 1.2rem + 1.8vw, 2.7rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "0em"
  row-term:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "0em"
  phone-big:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2rem, 1.4rem + 2.4vw, 3.4rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.01em"
  button:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "1.12rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.005em"
  link-label:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: "0em"
  lead:
    fontFamily: "Source Sans 3, Segoe UI, Helvetica Neue, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  body:
    fontFamily: "Source Sans 3, Segoe UI, Helvetica Neue, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  gloss:
    fontFamily: "Source Sans 3, Segoe UI, Helvetica Neue, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: "0em"
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.08em"
  nav:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.07em"
  label-small:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.06em"
  numeral:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "3rem"
    fontWeight: 600
    lineHeight: 0.9
    letterSpacing: "-0.02em"
rounded:
  sm: "3px"
  md: "4px"
  tile: "14px"
  pill: "999px"
  round: "50%"
spacing:
  gutter: "clamp(1rem, 4vw, 2.5rem)"
  rail: "64px"
  bay: "clamp(3rem, 8vh, 6rem)"
  epigraph: "clamp(2.5rem, 7vh, 5rem)"
  page-head: "clamp(3rem, 9vh, 5.5rem) 0 clamp(2rem, 6vh, 3.5rem)"
  sheet-inset: "clamp(2.5rem, 6vh, 4.5rem)"
  sheet-gap: "clamp(2rem, 5vh, 3.5rem)"
  block: "2.5rem"
  stack: "1.5rem"
  row-pad: "1.4rem"
  grid-row: "2.5rem"
  grid-col: "3rem"
  action-gap: "0.8rem 1rem"
  touch: "44px"
components:
  button-primary:
    backgroundColor: "{colors.scrub-blue}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.6rem 1.6rem 0.6rem 1.7rem"
    height: "54px"
  button-primary-hover:
    backgroundColor: "{colors.scrub-blue-deep}"
    textColor: "{colors.white}"
  button-ghost:
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.6rem 1.6rem 0.6rem 1.7rem"
    height: "54px"
  button-ghost-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-ghost-on-rail:
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    height: "50px"
  button-ghost-on-rail-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.rail}"
  button-whatsapp-tile:
    backgroundColor: "rgba(255, 255, 255, 0.12)"
    textColor: "{colors.white}"
    rounded: "{rounded.tile}"
    width: "52px"
    height: "50px"
  button-small:
    padding: "0.35rem 1.1rem 0.35rem 1.2rem"
    height: "44px"
  nav-link:
    textColor: "{colors.white}"
    typography: "{typography.nav}"
    padding: "0 0.85rem"
    height: "44px"
  nav-link-hover:
    textColor: "{colors.sage-pale}"
  nav-link-active:
    textColor: "{colors.sage-light}"
  text-link:
    textColor: "{colors.ink}"
    typography: "{typography.link-label}"
    padding: "0.55rem 0"
    height: "44px"
  link-inline:
    textColor: "{colors.scrub-blue}"
    typography: "{typography.body}"
    height: "44px"
  skip-link:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.3rem"
  rail:
    backgroundColor: "{colors.rail}"
    textColor: "{colors.white}"
    height: "{spacing.rail}"
  sheet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "{spacing.sheet-inset} {spacing.gutter}"
  slip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "0 clamp(1.25rem, 3vw, 2.5rem) clamp(1.25rem, 3vw, 2.5rem)"
  epigraph:
    textColor: "{colors.ink}"
    typography: "{typography.quote}"
    padding: "{spacing.epigraph} {spacing.gutter}"
    width: "40rem"
  page-head:
    textColor: "{colors.ink}"
    typography: "{typography.page-title}"
    padding: "{spacing.page-head}"
  rows-term:
    textColor: "{colors.ink}"
    typography: "{typography.row-term}"
    padding: "{spacing.row-pad} 0"
  condition-gloss:
    textColor: "{colors.ink-soft}"
    typography: "{typography.gloss}"
  steps-numeral:
    textColor: "{colors.sage-deep}"
    typography: "{typography.numeral}"
  phone-big:
    textColor: "{colors.ink}"
    typography: "{typography.phone-big}"
    height: "44px"
  phone-big-hover:
    textColor: "{colors.scrub-blue}"
  notice-band:
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
    padding: "{spacing.bay} 0"
  note:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "1rem 1.25rem"
  action-bar:
    backgroundColor: "{colors.rail}"
    padding: "0.6rem {spacing.gutter}"
  footer:
    backgroundColor: "{colors.rail}"
    textColor: "{colors.sage-pale}"
    padding: "2.5rem {spacing.gutter}"
  footer-title:
    textColor: "{colors.white}"
    typography: "{typography.label}"
---

# Design System: Dott.ssa Valentina Tanga

## Overview

**Creative North Star: "L'ambulatorio"**

The site is the pain therapist's treatment room, built from its three materials. A pleated hospital curtain in soft sage is the ground of every page: it never gives way to a white canvas, its vertical pleats run behind everything that is not paper, and text sits on it in ink, dark on light, as on a chart pinned to the fabric. Reading happens on paper-white sheets torn off the examination bed's roll, each with a perforated top edge, laid over the curtain one after another down the page. Scrub blue appears only where the visitor acts (book, call, write, open a map); it is never a heading, a rule, or an ornament. A solid dark-green rail runs across the top of the room and carries the navigation on small rings; the footer and the phone's action bar are the same dark fitting. The homepage is a slim front door (the portrait and the hook, the argument, one quotation, the first visit in three steps, two teasers, the booking band) and the four-page site is read through it.

The register is serious, plain and reassuring. Type is a condensed signage system (Barlow Condensed caps for labels and navigation, Barlow Semi Condensed for the hook, headings, buttons and link labels) set against a wide, quiet reading face (Source Sans 3) at a large body size, because the readers are often in pain, older, and on a phone in the evening. Density is low: one argument per bay, generous paper margins, 66-character measures, and one quotation given its own quiet band on the curtain. Motion is a single theatrical gesture, the curtain halves parting on load, and nothing else moves except a button lifting a pixel and an arrow sliding three.

The world rejects the medical-site default of a white page, a smiling-doctor hero, a blue accent everywhere and three icon cards. Photographs are the client-approved pictures of the doctor at work, set directly on the curtain or on paper as plain prints with a soft box-shadow, never as stock or background imagery.

**Key Characteristics:**
- Sage curtain (`#9db09a`) is the page ground on every surface, read in ink (`#1f2b23`); paper sheets (`#f7f5f0`) carry all running copy.
- The dark green (`#2f3f34`) is a fitting, not a ground: rail, footer and mobile action bar, always with white text, solid with no metallic trim.
- Scrub blue (`#2b5da8`) is reserved for actions and inline links; it appears nowhere decorative.
- Three self-hosted faces with a clear division of labour: Barlow Condensed caps for signage and navigation, Barlow Semi Condensed for headings, pill buttons and link labels in sentence case, Source Sans 3 for reading.
- Paper edges are perforated (sage dots on a 14px pitch) wherever paper meets curtain.
- Depth is physical but light: one long soft shadow under lifted paper, a box-shadow under photographs, a blue-tinted lift under the primary pill, a short drop under the rail, none under text.
- Every control is at least 44px tall; call, WhatsApp and booking are always one tap away.
- One choreographed motion (the curtain opening), fully disabled under `prefers-reduced-motion`.

## Colors

A three-material palette: one sage ground with its lights, folds and one dark fitting, warm paper with ink, and one blue for action.

### Primary
- **Scrub Blue** (`#2b5da8`): the action colour. Primary pill buttons (`Prenota`), inline links (the email address, map and site links), the icon of the large phone number, and the global focus ring. It is the only saturated non-green on the page and reads as "this is where you act".
- **Scrub Blue Deep** (`#234c8a`): primary button hover only.

### Neutral
- **Sage** (`#9db09a`): the body background and page ground, and the perforation dots on every paper edge. Ink on it reaches 6.4:1.
- **Sage Fold** (`#7f9480`): the two curtain halves that part over the hero; one step darker than the ground so the gathered folds read as fabric in front of it.
- **Sage Deep** (`#3e5244`): the numerals of the `steps` and, by the green-bay `h3` rule, labels on the curtain. It is a darker green used as a second ink, never as a surface. The hook's emphasised clause is now plain Ink.
- **Moss** (`#5c7360`): the green accent on paper: the checklist ticks (4.7:1 on Paper).
- **Sage Light** (`#c3d0bf`): hairline rules on paper (`rows`, `contact-grid`, `condition-group`, slip techniques and note), the brand role line, the active nav item's text and its 3px underline on the rail, the text selection colour, and nav hover in the footer.
- **Sage Pale** (`#dce5d8`): footer body text and the legal line, and nav hover on the rail.
- **Rail** (`#2f3f34`): the one dark green. Header rail, footer and the mobile action bar; also the theme-colour and the scrollbar track. Text on it is White (11.2:1) or Sage Pale (8.6:1).
- **Paper** (`#f7f5f0`): sheets and the slip. All long copy sits on it.
- **Paper Shade** (`#e8e6de`): the darker paper at a perforation and row dividers on paper (`rows`).
- **Ink** (`#1f2b23`): text everywhere outside the dark fittings: on the curtain (hook including its emphasised clause, leads, prose, places line, the epigraph and its rule, the close heading, text links) and on paper (headings, prose, the page-head byline, ghost-button stroke and text).
- **Ink Soft** (`#4a5a4e`): secondary text on paper: `h3` labels, glosses and notes (`prose-note`).
- **Steel** (`#aeb6bb`): the stroke of the nav rings and the scrollbar thumb on the rail. The other steel tones and the brushed gradient are retired; Steel is no longer a surface and is never text.
- **White** (`#ffffff`): text on the dark fittings (brand name, nav, footer name, title and nav, the action bar's ghost button), primary-button text, the focus ring on the fittings, and the skip link's fill.

### Named Rules
**The Scrub Blue Rule.** Blue means "act". It appears on primary buttons, inline links and the focus ring, and nowhere else: never on headings, rules, icons at rest, or backgrounds.

**The Paper for Reading Rule.** Running copy longer than one lead sentence lives on paper (`#f7f5f0`) with ink (`#1f2b23`). A green bay holds a heading, one or two lead sentences and an action; anything longer is laid on a paper slip. The epigraph is the one exception: a single quotation may stand on the curtain.

**The Ink on Sage Rule.** Text on the curtain is Ink, never white: the sage is light enough to be read like paper. White text exists only on the dark fittings (Rail), and nothing in the sage family is used as a surface for white text.

**The Ground Contrast Rule.** Ink on the darkest point of the curtain texture must stay at or above 4.5:1; as built the worst case, ink on a fold, is 4.75:1. The fold shadows are therefore lightened to alphas of 0.07, 0.03, 0.02 and 0.03 (the broad pleat, the secondary fold, the slow drift, the vertical wash). A new ground layer may not darken beyond that, and the lighter pleat highlights may be strengthened instead.

## Typography

**Display Font:** Barlow Semi Condensed (with Arial Narrow)
**Body Font:** Source Sans 3 (with Segoe UI, Helvetica Neue)
**Label/Sign Font:** Barlow Condensed (with Arial Narrow)

All three are self-hosted WOFF2 in `fonts/` (Barlow Condensed 500/600, Barlow Semi Condensed 500/600, Source Sans 3 400/400 italic/600) with `font-display: swap`; the headline face and body regular are preloaded.

**Character:** Hospital signage over a plain, legible reading face. Barlow Condensed carries the authority of a corridor sign (tight, upright, tracked uppercase for labels and navigation); Barlow Semi Condensed, a touch wider, does the headings, the sentence-case buttons and the link labels so a control reads as a spoken instruction rather than a sign; Source Sans 3 at 18px with 1.6 leading does the actual explaining without raising its voice. Paragraphs, list items and definitions use `text-wrap: pretty`.

### Hierarchy
- **Display** (600, `clamp(2.5rem, 1.6rem + 3.5vw, 4.25rem)`, 1.02): the hero hook only, Barlow Semi Condensed, balanced, at most 24ch wide, all Ink. The very tight leading is a display-only setting for a condensed face at 40–68px. The hook keeps its own full stop; no other heading ends with one.
- **Page title** (600, `clamp(2.6rem, 1.8rem + 3vw, 4.25rem)`, 1.02, -0.012em): the `h1` of each inner page, balanced, at most 16ch, Ink, directly on the curtain. The lead beneath it is Lead at 1.3rem (58ch, `1.25rem` below) and a byline, where used (`chi-sono.html`), is Barlow Condensed signage caps in Ink.
- **Headline** (600, `clamp(2rem, 1.3rem + 2.2vw, 3.1rem)`, 1.05): every bay `h2`, balanced, at most 22ch, Ink on sage and on paper, with no trailing full stop. In the two-teaser band it is reduced to `clamp(1.8rem, 1.2rem + 1.8vw, 2.6rem)`.
- **Quote** (500, `clamp(1.7rem, 1.2rem + 1.8vw, 2.7rem)`, 1.12): the epigraph on the curtain, centred, balanced, Ink, at most 40rem wide.
- **Row term** (600, 1.35rem, 1.15): the `dt` in definition rows, Ink.
- **Phone number** (600, `clamp(2rem, 1.4rem + 2.4vw, 3.4rem)`, 1, -0.01em): the large call link on the contacts page; Ink with a Scrub Blue icon at 0.8em, 44px minimum height, turning Scrub Blue on hover.
- **Button** (600, 1.12rem, 1.2, 0.005em, sentence case): every `.btn` label; the small variant is 1rem and in the action bar it is 1rem, no wrap.
- **Link label** (600, 1.15rem, 0 tracking, sentence case): every `.text-link`, Barlow Semi Condensed; the skip link uses the same face.
- **Lead** (400, 1.25rem, 1.6): the first paragraph of a bay (`.lead`); the hero lead is 1.2rem.
- **Body** (400, 1.125rem, 1.6): all prose, 66ch measure (`.prose`), paragraphs spaced 1rem; the `prose-note` introducing a list is 60ch in Ink Soft. The checklist and condition items are 1.15rem.
- **Gloss** (400, 0.95rem, 1.35, Ink Soft): the plain-language explanation under a condition (`.lay`), set as a block line below it.
- **Label** (600, 1.05rem, 0.08em, uppercase): Barlow Condensed signage. Bay `h3` (contact cells, steps, condition groups), technique terms (1.1rem, 0.07em), the epigraph attribution (1rem, 0.1em), the footer title (1rem).
- **Nav** (600, 1.1rem, 0.07em, uppercase): rail items; footer nav is 1.05rem.
- **Label Small** (500, 0.95rem, 0.06em, uppercase): the brand role line (0.8rem, 0.08em) and the `hero-places` line (1rem, 0.08em).
- **Numeral** (600, 3rem, 0.9, -0.02em): the `steps` counters, Barlow Condensed in Sage Deep on paper.

### Named Rules
**The Signage Caps Rule.** Barlow Condensed is always uppercase and tracked (0.06–0.1em) and is never used for running text, buttons or link labels; Source Sans 3 is never uppercase or tracked. Buttons and text links are Barlow Semi Condensed in sentence case, the same face as the headings.

**The One Hook Rule.** Display size exists once per page, for the hero hook on the homepage or the page title on an inner page; sections open with Headline and never with a label above the heading.

## Layout

The page is a single column of **bays** on the curtain; the body is a minimum-viewport-height flex column and `main` grows, so on a short page (the 404) the footer sits at the bottom of the window. A bay is a full-bleed band padded `clamp(3rem, 8vh, 6rem)` top and bottom whose content sits in a 1180px column (`--col`) with a `clamp(1rem, 4vw, 2.5rem)` gutter. A **sheet** is a bay rendered as paper: it is `1180px + 2 gutters` wide, centred, separated from its neighbours by `clamp(2rem, 5vh, 3.5rem)` of visible curtain, and padded `clamp(2.5rem, 6vh, 4.5rem)` vertically inside. The **epigraph** is a third kind of band: curtain only, padded `clamp(2.5rem, 7vh, 5rem)`, holding one centred 40rem column.

The homepage order is: hero (hook, lead, places, three actions, and the doctor's standing portrait at right), sheet "Perché rivolgersi a uno specialista del dolore", epigraph, sheet "Come si svolge la prima visita" (three steps, a cropped procedure photograph, two text links), green band with two teasers, green closing band, footer. Inner pages are `chi-sono.html`, `terapie.html` and `contatti.html` ("Contatti e sedi"), plus `404.html`. Each opens with a **page head** in place of the hero (no curtain halves, no photo): the title block directly on the sage, padded `clamp(3rem, 9vh, 5.5rem)` above and `clamp(2rem, 6vh, 3.5rem)` below. Every content page ends in a green closing band and then the footer.

- `chi-sono.html`: page head with byline, a two-col sheet with the studio portrait, "Formazione ed esperienza" rows, a two-col sheet with a 4 / 3 cropped portrait, closing band.
- `terapie.html`: "Dalla visita alla cura" steps, "Le condizioni di cui mi occupo" condition groups with glosses, "Farmaci e infiltrazioni" rows, "Altre terapie" rows (introduced by a `prose-note`), the ozone slip on a green bay (`#ozono`), closing band "Parliamone in visita".
- `contatti.html`: "Per prenotare" contact grid of four cells, "Le sedi" rows (`#sedi`), the online bay (`#online`, no button), the first-visit checklist (`#prima-visita`), then the emergency band.
- `404.html`: a page head, a lead and two pills (`Torna alla home`, `Vai ai contatti`), no closing band; no nav item is marked current.

The sticky rail is 64px tall (`--rail-h`) and holds brand (name over role), the four nav items (Home, Chi sono, Terapie, Contatti) at the right and a small blue `Prenota` pill. The hero fills `min(100svh − rail − 9px, 880px)`, with a 12 : 8 grid (`minmax(0,12fr) minmax(0,8fr)`) aligned to the bottom: copy on the left, the portrait (`3 / 3.6`, cropped at `50% 12%`) on the right.

Inside paper, content uses these grids: **two-col** (`5fr : 7fr`, gap `clamp(2rem, 5vw, 5rem)`) for a heading or portrait beside prose; **three-up** (`repeat(3, 1fr)`, gap `2.5rem 3rem`) for steps, conditions and techniques; **rows** (4fr label : 8fr text) for definitions; **contact-grid** (two equal columns, gap `2.5rem 3rem`). On a green bay, **duo** gives two equal columns (gap `3rem clamp(2rem, 5vw, 5rem)`). Vertical rhythm inside a bay: `2.5rem` before any grid or action row, `1.5rem` between stacked elements (`.stack`), `1rem` between paragraphs. Actions sit in a wrapping flex row with `0.8rem 1rem` gaps.

Responsive rules, as built:
- **≤1100px:** conditions and techniques fall to two columns.
- **≤900px:** rows, steps and duo collapse to one column (rows tighten to a `0.4rem` gap). The rail's `Prenota` hides and the nav wraps onto a second full-bleed row of its own (wrapping, never scrolling, items 44px tall, no rings). The hero becomes one column, copy first, portrait (max 440px, `4 / 4.2`) second; the curtain halves translate fully off-screen (`±100%`) rather than gathering at `±92%`. Two-col stacks and portraits cap at 360px. The fixed **mobile action bar** appears (phone number, WhatsApp tile, `Prenota`) and the body gains `86px` bottom padding.
- **≤600px:** conditions, techniques and the contact grid are one column; buttons allow wrapping and hero buttons stretch to fill (the icon-only button stays square); the cropped procedure photograph changes from `16 / 6` to `4 / 3`; the epigraph gains `1.25rem` side padding; the footer stacks.

## Elevation & Depth

Depth is material, not tonal. The curtain itself is flat but textured: the body carries four stacked `repeating-linear-gradient` layers (a 72px pleat, a 113px secondary fold, a 301px slow drift at 91.5°, and a top-to-bottom wash), all kept light by the Ground Contrast Rule. The texture is not fixed to the viewport; it scrolls with the page. Paper is lifted off the curtain by one long, soft, downward shadow and a 2px inner highlight along its top. Photographs carry a box-shadow on the image itself (no drop-shadow filters). The primary pill casts a blue-tinted lift with a 1px inner highlight, so it reads as a solid object rather than a flat fill. The rail casts a short drop onto the page. Text, rules, ghost buttons, the action-bar tiles and the curtain halves' body cast nothing; the halves only cast a side shadow along their gathered inner edge.

### Shadow Vocabulary
- **Paper lift** (`box-shadow: 0 30px 50px -30px rgba(0,0,0,0.55), 0 2px 0 rgba(255,255,255,0.25) inset`): sheets. The slip uses the first term only (no inner highlight).
- **Hero photo** (`box-shadow: 0 24px 30px -14px rgba(0,0,0,0.4)` on the `img`): the hero portrait.
- **Portrait** (`box-shadow: 0 18px 24px -12px rgba(0,0,0,0.3)` on the `img`): portraits on paper. The cropped procedure photograph carries none.
- **Button lift** (`box-shadow: 0 12px 24px -12px rgba(23,44,84,0.65), inset 0 1px 0 rgba(255,255,255,0.18)`, hover `0 16px 28px -12px rgba(23,44,84,0.7)` with the same inset): primary pills only; ghost pills are flat.
- **Rail drop** (`box-shadow: 0 10px 24px -14px rgba(0,0,0,0.6)`): the sticky rail; the action bar mirrors it upward (`0 -10px 24px -14px`).
- **Skip link** (`box-shadow: 0 10px 24px -10px rgba(0,0,0,0.5)`): the white skip pill while focused.
- **Curtain edge** (`box-shadow: 14px 0 40px -10px rgba(0,0,0,0.55)` mirrored for the right half, plus a 26px inner gradient to `rgba(0,0,0,0.35)`): the gathered inner edges of the two curtain halves.

### Named Rules
**The Lifted Paper Rule.** Only things that physically sit on the curtain cast a shadow: paper, photographs and the blue pill. Nothing on paper casts a shadow onto paper; hierarchy inside a sheet is done with rules, type and whitespace.

**The Scrolling Curtain Rule.** The curtain texture scrolls with the page and carries no `background-attachment: fixed`; the pleat pitch stays 72px over Sage so a new ground surface continues the same fabric.

## Shapes

Three silhouettes coexist: everything is nearly square, the controls are pills, and the action bar's WhatsApp is a rounded tile. Corners are 4px (`md`) on images and the bordered note; 3px (`sm`) on the footer's pending tag; buttons and the skip link are full pills (`999px`) with the icon in a circle; the action bar's WhatsApp is a 52px tile with a 14px radius (`tile`); nav rings and icon discs are round (`50%`).

The signature edge is the **perforation**: wherever paper meets curtain along its top, a 14px strip of Paper Shade fading into Paper carries a row of Sage dots (2.6px radius on a 14px pitch) so the sheet reads as torn from the bed's roll.

Rules are 2px when they mark structure (the top of rows, contact cells and condition groups, the ghost pill stroke, the 3rem epigraph rule, the underline of a text link) and 1px when they divide rows (Paper Shade on paper, `rgba(255,255,255,0.12)` on the footer, `rgba(255,255,255,0.16)` along the top of the action bar). Rules drawn on the sage are ink at reduced alpha (`rgba(31,43,35,0.3)` for technique tops, `0.35` for the note's stroke); inside the slip they become Sage Light. Images are tall: `3 / 3.6` for the hero portrait, `3 / 4` for portraits, `4 / 3` for the cropped second portrait (at `50% 22%`), and a wide `16 / 6` strip for the procedure photograph (at `50% 64%`).

## Components

Tactile and plain: controls look like fittings from the room, not like web widgets; the pills are the one soft shape and read as something to press.

### Buttons
- **Shape:** pill (`999px`), 54px minimum height, `0.6rem 1.6rem 0.6rem 1.7rem` padding, Barlow Semi Condensed 600 1.12rem in sentence case, `0.75rem` gap to the icon. The icon sits in a **tinted circle** 1.75em across (`0.42em` padding) pulled `0.55em` into the end padding; it trails the label (`#i-ext`) or leads it for the phone (`#i-phone`). External-link buttons open in a new tab (`target="_blank"`) and carry visually hidden "(si apre in una nuova pagina)".
- **Primary** (`Prenota su MioDottore`, `Prenota`): Scrub Blue on White, icon circle `rgba(255,255,255,0.18)`, button-lift shadow. The only element that uses blue as a fill.
- **Ghost** (`379 208 2755`): transparent with a 2px `currentColor` stroke in Ink, Ink text, icon circle `rgba(31,43,35,0.08)`; hover inverts to an Ink fill with Paper text. The phone button shows only the icon and the number (no "Chiama"). Call and WhatsApp share the one number, 379 208 2755 (`tel:` and `wa.me`).
- **WhatsApp** (`WhatsApp`, `Scrivi su WhatsApp`): a labelled ghost pill whose glyph is bare (1.5em, `icon-bare`, no disc behind it, so there is no circle inside a circle). In the mobile action bar it is a 52px tile instead: no stroke, fill `rgba(255,255,255,0.12)` (`0.22` on hover), 14px radius, a 1.7em glyph, and an `aria-label` ("Scrivi su WhatsApp (si apre in una nuova pagina)").
- **Hover / Focus:** hover darkens primary to Scrub Blue Deep, lifts 1px and deepens the shadow; active returns to rest. Focus is the global ring (3px Scrub Blue at 3px offset; White inside the rail, action bar and footer). Transitions are 0.25s on the custom ease-out for transform and shadow, 0.2s for colours.
- **Small** (`.btn-small`): 44px, 1rem, `0.35rem 1.1rem 0.35rem 1.2rem`; used only for the rail's `Prenota`.

### Text links
- **Text link** (`Cosa portare alla prima visita →`, `Tutte le terapie →`, `Come funziona l'ozonoterapia →`, `Le opinioni dei pazienti su MioDottore`): Barlow Semi Condensed 600 1.15rem in sentence case, a 44px touch area (`0.55rem` vertical padding), underlined by a 2px line drawn as a background image `0.55rem` above the bottom (no border). Hover widens the gap from 0.4rem to 0.7rem and slides the arrow 3px right. Ink on the curtain and on paper.
- **Inline link** (`.link`: map, phone and practice-site values in rows, and the email): Source Sans 3 600 in Scrub Blue with a leading or trailing icon, 44px minimum height, underline on hover. The email is 1.2rem and may wrap anywhere.
- Plain anchors inherit colour and underline with a 2px thickness at 0.18em offset.

### Skip link
- A white pill (`Vai al contenuto`, Barlow Semi Condensed 600, `0.8rem 1.3rem`) parked off the top-left edge and moved to `0.75rem` from the top when focused; it targets `main#contenuto` (`tabindex="-1"`, outline suppressed). First focusable element on every page.

### Rail (navigation)
- **Style:** sticky, a solid Rail-green band with the rail drop shadow; no border or gradient trim. Brand at left as name (Barlow Semi Condensed 600 1.35rem, White) over role (Barlow Condensed 500 0.8rem, Sage Light, uppercase 0.08em).
- **Nav items:** Barlow Condensed 600 1.1rem uppercase 0.07em, White, 44px tall, `0 0.85rem`. Each hangs from a **ring**: a 9px circle with a 2px Steel stroke, centred 5px above the item, at 0.45 opacity at rest.
- **Hover / Active:** hover turns the text Sage Pale and the ring opaque; `aria-current="page"` turns the text Sage Light, the ring opaque and draws a 3px Sage Light underline inside the item. Each page marks its own item; the footer nav is never marked.
- **Mobile (≤900px):** the rail's `Prenota` hides; nav wraps onto a second full-bleed row with the rings removed; the fixed action bar takes over.

### Paper sheet
- **Corner Style:** square.
- **Background:** Paper with Ink text, `1180px + 2 gutters` wide, centred, `clamp(2rem, 5vh, 3.5rem)` of curtain between sheets.
- **Edge:** the 14px perforation strip along the top.
- **Shadow Strategy:** paper lift (see Elevation).
- **Internal Padding:** `clamp(2.5rem, 6vh, 4.5rem)` vertical inside the 1180px column, gutter horizontal.

### Paper slip
- A smaller sheet laid inside a green bay for copy too long for the curtain (the ozone indications, techniques and caution note on `terapie.html`). Same Paper, Ink and perforation edge, `2.5rem` below the bay's lead, padded `clamp(1.25rem, 3vw, 2.5rem)` on the sides and bottom with the intro paragraph starting `1.75rem` below the perforation. Technique terms are signage caps in Ink over a 2px Ink-at-30% rule (Sage Light inside the slip); the note's stroke is Sage Light.

### Epigraph
- The Pavese line as its own band on the curtain between the first two sheets: a `blockquote` centred in a 40rem column, Quote type, Ink, balanced; the attribution (`Cesare Pavese`) in signage caps (600, 1rem, 0.1em) `1.1rem` below, preceded by a centred 3rem × 2px Ink rule with `0.9rem` beneath it. No paper, no shadow, no border; `aria-label="Citazione"`.

### Page head (inner pages)
- The title block of an inner page, directly on the curtain: Page title `h1` (Ink, 16ch), an optional signage byline in Ink (`Specialista in Anestesia, Rianimazione e Terapia del Dolore` on `chi-sono.html`), and a 1.3rem lead at most 58ch wide. No paper, no shadow, no ornament; the 404 adds an actions row.

### Definition rows
- A `dl` laid on paper, one treatment, credential or practice per row: a 2px Sage Light rule on top, rows of `1.4rem` vertical padding separated by 1px Paper Shade, a 4fr / 8fr grid with a `3rem` gap. The term is a Row term (Ink); the definition is Body in Ink at most 66ch, with `0.6rem` between paragraphs (`0.1rem` where a row holds an address and a links line). Used for education and experience, "Farmaci e infiltrazioni", "Altre terapie" and "Le sedi". In "Le sedi" a `row-links` line of 44px inline links (map, phone, practice site) follows the address; below 900px term stacks over text.

### Condition groups
- On `terapie.html`: a three-up grid of groups, each opened by a 2px Sage Light rule and `1rem` of padding, an Ink Soft signage `h3`, then a plain list at 1.15rem (`0.4rem` row padding) where a term may be followed by a **gloss** (`Lombalgia` then "mal di schiena nella parte bassa"), set as a block line in Gloss type. Glosses appear only where the term is medical jargon.

### Steps (numbered protocol on paper)
- A three-column ordered list (`2rem 3rem` gap), each step a CSS-counter numeral (Barlow Condensed 600 3rem, leading 0.9, Sage Deep), an Ink signage `h3` at 1.15rem/0.05em and Ink body text, `0.5rem` apart. Used on the homepage for the first visit (`Colloquio`, `Visita e test`, `Terapia`) and on `terapie.html` for "Dalla visita alla cura". It collapses to one column below 900px.

### Procedure photograph (evidence)
- A full-width strip under the homepage steps: `16 / 6`, cropped at `50% 64%`, 4px corners, `2.5rem` above, no shadow and no caption; `4 / 3` below 600px.

### Contact grid
- Two equal columns on paper (`2.5rem 3rem` gap), four cells (`Online`, `Per telefono`, `Su WhatsApp`, `Per email`), each opened by a 2px Sage Light rule and `1.25rem` of padding, an Ink Soft signage `h3`, Ink text `0.5rem` below, and the cell's action: the primary `Prenota su MioDottore` pill, the Phone number link, the ghost `Scrivi su WhatsApp` pill, or the blue email link.

### Phone number link
- The large call link (`379 208 2755`): Phone number type, a leading phone icon at 0.8em in Scrub Blue, Ink text, no underline; hover turns the text Scrub Blue. It is the page's one oversized control and exists on the contacts page only.

### Teaser duo (homepage)
- A green bay holding two equal columns, each a reduced Headline (`Ossigeno-ozono terapia`, `Consulenza online`), one Lead of one or two sentences in Ink and a text link (`Come funziona l'ozonoterapia` to `terapie.html#ozono`, `Come si svolge la consulenza online` to `contatti.html#online`). Stacks below 900px.

### Closing bands
- Every content page closes on a green bay (`close-bay`) on the curtain, always an Ink heading and one of two patterns. **Action band:** Headline plus an actions row of the primary `Prenota su MioDottore`, a ghost phone number and a ghost `WhatsApp` (the homepage and `chi-sono.html` also add the reviews text link; `terapie.html` uses `Parliamone in visita`). **Notice band** (`contatti.html`, after the first-visit checklist): the heading `In caso di urgenza chiama il 112` with the one lead line `Questo sito e i numeri indicati non sono un servizio di emergenza.` and no buttons, because no booking action should sit next to an emergency instruction. A heading followed by a lead takes `1.25rem` between them.

### Note
- A 1px `rgba(31,43,35,0.35)` stroke box at 4px radius, `1rem 1.25rem` padding, 66ch wide, Ink text; inside the slip the stroke is Sage Light.

### Checklist
- Rows of 1.15rem Ink text with a leading Moss check icon (`0.8rem` gap, `0.75rem` between rows, icon nudged `0.3em` down to sit on the first line).

### Curtain (hero motion)
- Two absolutely positioned halves, each 50% wide, in Sage Fold with their own tighter pleat set (`--p: 34px`, plus a 53px secondary fold), masked to fade out over the bottom 20%, with a 26px darkened inner edge and the curtain-edge shadow. On load they translate from the centre to `±92%` over 1.5s on `cubic-bezier(0.16, 1, 0.3, 1)` after a 0.35s delay, so a gathered fold remains visible at each side on desktop; below 900px they go to `±100%`. The hero content fades up 14px over 1s starting at 1s. Under `prefers-reduced-motion: reduce` both animations are removed and the halves are rendered already open.

### Mobile action bar
- Fixed to the bottom from 900px down: Rail green with a 1px `rgba(255,255,255,0.16)` top line (no steel) and the upward rail shadow, `0.6rem` padding plus the safe-area inset, three columns (`1.35fr auto 1fr`) at a `0.5rem` gap. Left a White-stroked ghost showing the phone icon and `379 208 2755`, centre the 52px WhatsApp tile, right the primary `Prenota`; each 50px tall, labels 1rem and never wrapping, icons 1.2em without discs. Hidden on desktop, where the rail and hero carry the same actions.

### Footer
- Rail green with Sage Pale text at 1rem and a 1px `rgba(255,255,255,0.12)` top rule. Name in Barlow Semi Condensed 600 1.25rem White, then a **title line** `Medico Chirurgo` in signage caps (600, 1rem, 0.08em, White), the specialist line, places with the phone number, and a line with `WhatsApp` and the email; a White signage nav (Home, Chi sono, Terapie, Contatti; hover Sage Light) at right; every footer link has a 44px target. Below, a plain **legal line** in Sage Pale (`Iscrizione all'Albo dei Medici Chirurghi di Cagliari n. 10208 · P. IVA 03735660924`), and last the dashed amber pending tag (`#f0c56a` stroke, `#f6d89a` text, 3px corners, Barlow Condensed 500 1rem, sentence case, tracked 0.03em) which now carries only `Informativa privacy [da inserire]`. The tag is a placeholder to remove at launch, not a component.

### Document shell
- Every page declares the favicon (`favicon.svg`), `apple-touch-icon.png`, a canonical URL, Open Graph and Twitter-card metadata (image `images/og-image.jpg`, Italian locale) and a Physician JSON-LD block; `robots.txt` and `sitemap.xml` sit at the root. The site URL in all of these is the GitHub Pages address (`https://aisacode.github.io/website-dottvalentinatanga/`) and must be replaced everywhere when a custom domain is set.

## Do's and Don'ts

### Do:
- **Do** keep the sage curtain as the ground of every page and let it show between sheets; a new page starts from `#9db09a` with the four light pleat layers, never from white.
- **Do** keep ink on every part of the curtain at 4.5:1 or better: fold shadows stay at or under the alphas listed in the Ground Contrast Rule.
- **Do** set text on the curtain in Ink (`#1f2b23`), and reserve white text for the dark fittings (`#2f3f34`: rail, footer, action bar).
- **Do** put any copy longer than one or two lead sentences on paper (a sheet or a slip) in Ink; keep green bays to heading, lead and action.
- **Do** give every paper edge that meets the curtain the 14px perforation strip of Sage dots.
- **Do** use Scrub Blue only for primary pills, inline links and the focus ring; keep ghost pills Ink-stroked (White only inside the action bar).
- **Do** build buttons as 54px pills in Barlow Semi Condensed sentence case with the icon in a tinted circle (bare glyph for WhatsApp), and text links in the same face with the drawn underline.
- **Do** keep every touch target at 44px or more (54px pills, 44px small pill, nav, links and footer links, 50–52px in the action bar) and keep the fixed action bar on every content page below 900px.
- **Do** use one number, 379 208 2755, for both call and WhatsApp, and point every booking action at MioDottore, the phone, WhatsApp, email or the site's own pages.
- **Do** open every inner page with a page head directly on the curtain and close it with a green band; let the emergency notice band stand without buttons.
- **Do** use definition rows for lists of treatments, credentials and practices, condition groups with plain-language glosses for jargon, and the unified terms "Farmaci e infiltrazioni" and "Altre terapie".
- **Do** write h2 headings without a trailing full stop (the hero hook keeps its own).
- **Do** mark external links with the `#i-ext` icon, `target="_blank"` and visually hidden text.
- **Do** keep the skip link as the first focusable element and `main#contenuto` as its target.
- **Do** honour `prefers-reduced-motion` by removing both hero animations and rendering the curtain open.

### Don't:
- **Don't** use Scrub Blue, or any other saturated colour, for headings, rules, icons at rest or backgrounds.
- **Don't** put white text on any sage (`#9db09a`, `#7f9480`) or use the dark green as a page ground.
- **Don't** fix the curtain texture to the viewport or darken it beyond the Ground Contrast Rule.
- **Don't** reintroduce metallic trim: the rail and action bar are solid Rail green with at most a 1px translucent line.
- **Don't** put shadows under elements that sit on paper, or under text; only paper, photographs and the blue pill cast shadows, and photographs use box-shadow, not filters.
- **Don't** set buttons or text links in uppercase or in Barlow Condensed; signage caps are for labels and navigation.
- **Don't** put a disc behind the WhatsApp glyph in a pill, or a button beside the emergency notice.
- **Don't** add a second accent, a kicker above headings, or a display-size setting outside the hero hook and the inner-page title.
- **Don't** make the homepage a long brochure: it points to the inner pages with steps, text links and teasers rather than repeating their content.
- **Don't** invent opening hours or claim mechanisms or comparisons for a therapy; copy stays descriptive and points to the visit and the MioDottore agenda.
- **Don't** use stock photography, decorative anatomy, or icon cards; the only images are the client-approved photographs with their provenance sidecars.
- **Don't** round corners beyond 4px except on pills, the 14px action-bar tile and circles (button icon discs, nav rings).
- **Don't** treat the footer's amber privacy tag as a pattern; it exists to be deleted.
