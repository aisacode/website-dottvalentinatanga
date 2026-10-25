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
  steel-light: "#dfe3e6"
  steel: "#aeb6bb"
  steel-dark: "#6e7a80"
  steel-edge: "#3f484d"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.5rem, 1.6rem + 3.5vw, 4.25rem)"
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
  page-title:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.6rem, 1.8rem + 3vw, 4.25rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.012em"
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
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.08em"
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
  pill: "999px"
  round: "50%"
spacing:
  gutter: "clamp(1rem, 4vw, 2.5rem)"
  rail: "64px"
  bay: "clamp(3rem, 8vh, 6rem)"
  epigraph: "clamp(2.5rem, 7vh, 5rem)"
  page-head: "clamp(3rem, 9vh, 5.5rem) 0 clamp(2rem, 6vh, 3.5rem)"
  row-pad: "1.4rem"
  fact-key: "9.5rem"
  sheet-inset: "clamp(2.5rem, 6vh, 4.5rem)"
  sheet-gap: "clamp(2rem, 5vh, 3.5rem)"
  block: "2.5rem"
  stack: "1.5rem"
  grid-row: "2.5rem"
  grid-col: "3rem"
  action-gap: "0.8rem 1rem"
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
  button-small:
    padding: "0.35rem 1.1rem 0.35rem 1.2rem"
    height: "44px"
  nav-link:
    textColor: "{colors.white}"
    typography: "{typography.label}"
    padding: "0 0.85rem"
    height: "44px"
  nav-link-hover:
    textColor: "{colors.sage-pale}"
  nav-link-active:
    textColor: "{colors.sage-light}"
  text-link:
    typography: "{typography.label}"
    padding: "0 0 0.1rem"
  link-inline:
    textColor: "{colors.scrub-blue}"
    typography: "{typography.body}"
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
  go-row:
    textColor: "{colors.ink}"
    typography: "{typography.row-term}"
    padding: "1.35rem 0"
  go-row-arrow:
    textColor: "{colors.scrub-blue}"
    size: "1.4rem"
  duo-heading:
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
  rows-term:
    textColor: "{colors.ink}"
    typography: "{typography.row-term}"
    padding: "{spacing.row-pad} 0"
  facts-key:
    textColor: "{colors.ink-soft}"
    typography: "{typography.label-small}"
    width: "{spacing.fact-key}"
  steps-numeral:
    textColor: "{colors.sage-deep}"
    typography: "{typography.numeral}"
  phone-big:
    textColor: "{colors.ink}"
    typography: "{typography.phone-big}"
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
  hero-caption:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-soft}"
    typography: "{typography.label-small}"
    padding: "0.9rem 1.1rem"
  action-bar:
    backgroundColor: "{colors.rail}"
    padding: "0.6rem {spacing.gutter}"
  footer:
    backgroundColor: "{colors.rail}"
    textColor: "{colors.sage-pale}"
    padding: "2.5rem {spacing.gutter}"
---

# Design System: Dott.ssa Valentina Tanga

## Overview

**Creative North Star: "L'ambulatorio"**

The site is the pain therapist's treatment room, built from its three materials. A pleated hospital curtain in soft sage is the ground of every page: it never gives way to a white canvas, its vertical pleats run behind everything that is not paper, and text sits on it in ink, dark on light, as on a chart pinned to the fabric. Reading happens on paper-white sheets torn off the examination bed's roll, each with a perforated top edge, laid over the curtain one after another down the page. Scrub blue appears only where the visitor acts (book, call, open a map); it is never a heading, a rule, or an ornament. A brushed-steel rail runs across the top of the room on the one dark green surface and carries the navigation on small rings; the footer and the phone's action bar are the same dark fitting. The homepage is a slim front door (the argument, one quotation, three doors to the inner pages, two teasers, the booking band) and the four-page site is read through it.

The register is serious, plain and reassuring. Type is a condensed signage system (Barlow Condensed caps for labels, Barlow Semi Condensed for the hook, headings and buttons) set against a wide, quiet reading face (Source Sans 3) at a large body size, because the readers are often in pain, older, and on a phone in the evening. Density is low: one argument per bay, generous paper margins, 66-character measures, and one quotation given its own quiet band on the curtain. Motion is a single theatrical gesture, the curtain halves parting on load, and nothing else moves except a button lifting a pixel.

The world rejects the medical-site default of a white page, a smiling-doctor hero, a blue accent everywhere and three icon cards. Photographs are the three client-approved pictures of the doctor at work, used as prints with a paper caption or as tall portraits, never as stock or background imagery.

**Key Characteristics:**
- Sage curtain (`#9db09a`) is the page ground on every surface, read in ink (`#1f2b23`); paper sheets (`#f7f5f0`) carry all running copy.
- The dark green (`#2f3f34`) is a fitting, not a ground: rail, footer and mobile action bar, always with white text.
- Scrub blue (`#2b5da8`) is reserved for actions and inline links; it appears nowhere decorative.
- Brushed steel (a white-to-grey vertical gradient) is the only metal: the rail's top edge and the action bar's top edge.
- Three self-hosted faces with a clear division of labour: Barlow Condensed caps for signage, Barlow Semi Condensed for headings and sentence-case pill buttons, Source Sans 3 for reading.
- Paper edges are perforated (sage dots on a 14px pitch) wherever paper meets curtain.
- Depth is physical: one long soft shadow under lifted paper and photographs, a blue-tinted lift under the primary pill, a short hard drop under steel, none under text.
- One choreographed motion (the curtain opening), fully disabled under `prefers-reduced-motion`.

## Colors

A three-material palette: one sage ground with its lights, folds and one dark fitting, warm paper with ink, and one blue for action; brushed steel is drawn with neutral greys and never used as a text colour.

### Primary
- **Scrub Blue** (`#2b5da8`): the action colour. Primary pill buttons (`Prenota`), the inline phone and site links in facts lists, the arrow of each homepage door row, the icon of the large phone number, and the global focus ring. It is the only saturated non-green on the page and reads as "this is where you act".
- **Scrub Blue Deep** (`#234c8a`): primary button hover only.

### Neutral
- **Sage** (`#9db09a`): the body background and page ground, and the perforation dots on every paper edge. Ink on it reaches 6.4:1.
- **Sage Fold** (`#7f9480`): the two curtain halves that part over the hero; one step darker than the ground so the gathered folds read as fabric in front of it.
- **Sage Deep** (`#3e5244`): the emphasised clause of the hook (`<em>`), the `h3` labels on green bays, and the numerals of the `steps` on `terapie.html`; a darker green used as a second ink on the curtain, never as a surface.
- **Moss** (`#5c7360`): the green accent on paper: the byline under a location name and the checklist ticks (4.7:1 on Paper).
- **Sage Light** (`#c3d0bf`): hairline rules on paper (`rows`, `go-rows`, `contact-grid`, `experience`, slip techniques and note), the brand role line and the active nav item on the rail, the text selection colour, and nav hover in the footer.
- **Sage Pale** (`#dce5d8`): footer body text and nav hover on the rail.
- **Rail** (`#2f3f34`): the one dark green. Header rail, footer and the mobile action bar; also the theme-colour and the scrollbar track. Text on it is White (11.2:1) or Sage Pale (8.6:1).
- **Paper** (`#f7f5f0`): sheets, the slip, the hero photo's caption strip. All long copy sits on it.
- **Paper Shade** (`#e8e6de`): the darker paper at a perforation, row dividers on paper (`rows`, `go-rows`, `facts`, `experience`), the caption strip's dots.
- **Ink** (`#1f2b23`): text everywhere outside the dark fittings: on the curtain (hook, leads, prose, places line, the epigraph and its rule, the close heading) and on paper (headings, prose, the page-head byline, ghost-button stroke and text). `--on-green-2` is an alias of this value.
- **Ink Soft** (`#4a5a4e`): secondary text on paper: `h3` labels, facts keys, the hero caption.
- **Steel Light / Steel / Steel Dark / Steel Edge** (`#dfe3e6` / `#aeb6bb` / `#6e7a80` / `#3f484d`): the stops of the brushed-steel gradient (top to bottom, after a 1px white edge). The rail's 14px top border runs all four; the action bar's 6px border stops at Steel Dark. Never used for text.
- **White** (`#ffffff`): text on the dark fittings (brand name, nav, footer name and nav, the action bar's ghost button), primary-button text, the focus ring on the fittings, and the 1px highlight edge of every steel surface.

### Named Rules
**The Scrub Blue Rule.** Blue means "act". It appears on primary buttons, inline links and the focus ring, and nowhere else: never on headings, rules, icons at rest, or backgrounds.

**The Paper for Reading Rule.** Running copy longer than one lead sentence lives on paper (`#f7f5f0`) with ink (`#1f2b23`). A green bay holds a heading, one lead sentence and an action; anything longer is laid on a paper slip. The epigraph is the one exception: a single quotation may stand on the curtain.

**The Ink on Sage Rule.** Text on the curtain is Ink, never white: the sage is light enough to be read like paper. White text exists only on the dark fittings (Rail), and nothing in the sage family is used as a surface for white text.

## Typography

**Display Font:** Barlow Semi Condensed (with Arial Narrow)
**Body Font:** Source Sans 3 (with Segoe UI, Helvetica Neue)
**Label/Sign Font:** Barlow Condensed (with Arial Narrow)

All three are self-hosted WOFF2 in `fonts/` (Barlow Condensed 500/600, Barlow Semi Condensed 500/600, Source Sans 3 400/400 italic/600) with `font-display: swap`; the headline face and body regular are preloaded.

**Character:** Hospital signage over a plain, legible reading face. Barlow Condensed carries the authority of a corridor sign (tight, upright, tracked uppercase for labels); Barlow Semi Condensed, a touch wider, does the headings and the sentence-case buttons so a pill reads as a spoken instruction rather than a sign; Source Sans 3 at 18px with 1.6 leading does the actual explaining without raising its voice.

### Hierarchy
- **Display** (600, `clamp(2.5rem, 1.6rem + 3.5vw, 4.25rem)`, 1.02): the hero hook only, Barlow Semi Condensed, balanced, at most 24ch wide, Ink with its final clause in Sage Deep. The very tight leading is a display-only setting for a condensed face at 40–68px.
- **Page title** (600, `clamp(2.6rem, 1.8rem + 3vw, 4.25rem)`, 1.02, -0.012em): the `h1` of each inner page, Barlow Semi Condensed, balanced, at most 16ch, Ink, directly on the curtain. It is the Display setting with a slightly higher floor and stands in for the hook; the page-head lead beneath it is Lead at 1.3rem (58ch, `1.25rem` below the title) and the byline, where used (`chi-sono.html`), is Barlow Condensed signage caps in Ink.
- **Row term** (600, 1.35rem, 1.15): the `dt` in definition rows and the title of each homepage door row, Barlow Semi Condensed, Ink.
- **Phone number** (600, `clamp(2rem, 1.4rem + 2.4vw, 3.4rem)`, 1, -0.01em): the large call link on the contacts page; Ink with a Scrub Blue icon at 0.8em, turning Scrub Blue on hover.
- **Headline** (600, `clamp(2rem, 1.3rem + 2.2vw, 3.1rem)`, 1.05): every bay `h2`, balanced, at most 22ch, Ink on sage and on paper.
- **Quote** (500, `clamp(1.7rem, 1.2rem + 1.8vw, 2.7rem)`, 1.12): the epigraph on the curtain, Barlow Semi Condensed at medium weight, centred, balanced, Ink, at most 40rem wide.
- **Button** (600, 1.12rem, 1.2, 0.005em, sentence case): every `.btn` label, Barlow Semi Condensed; the small variant is 1rem.
- **Lead** (400, 1.25rem, 1.6): the first paragraph of a bay (`.lead`); the hero lead is 1.2rem.
- **Body** (400, 1.125rem, 1.6): all prose, 66ch measure (`.prose`), paragraphs spaced 1rem. The checklist items are 1.15rem.
- **Label** (600, 1.05rem, 0.08em, uppercase): Barlow Condensed signage. Bay `h3`, byline, text links (0.06em), technique terms (1.1rem, 0.07em), nav items (1.02rem, 0.07em), footer nav, the epigraph attribution (1rem, 0.1em).
- **Label Small** (500, 0.95rem, 0.06em, uppercase): the hero photo caption, the brand role line (0.8rem, 0.08em), the `hero-places` line (1rem, 0.08em), experience period tags (600, 0.9rem, 0.08em), the location byline.
- **Numeral** (600, 3rem, 0.9, -0.02em): the `steps` counters on `terapie.html`, Barlow Condensed in Sage Deep on paper.

### Named Rules
**The Signage Caps Rule.** Barlow Condensed is always uppercase and tracked (0.06–0.1em) and is never used for running text or on buttons; Source Sans 3 is never uppercase or tracked. Buttons are Barlow Semi Condensed in sentence case, the same face as the headings.

**The One Hook Rule.** Display size exists once per page, for the hero hook on the homepage or the page title on an inner page; sections open with Headline and never with a label above the heading.

## Layout

The page is a single column of **bays** on the curtain. A bay is a full-bleed band padded `clamp(3rem, 8vh, 6rem)` top and bottom whose content sits in a 1180px column (`--col`) with a `clamp(1rem, 4vw, 2.5rem)` gutter. A **sheet** is a bay rendered as paper: it is `1180px + 2 gutters` wide, centred, separated from its neighbours by `clamp(2rem, 5vh, 3.5rem)` of visible curtain, and padded `clamp(2.5rem, 6vh, 4.5rem)` vertically inside. The **epigraph** is a third kind of band: curtain only, padded `clamp(2.5rem, 7vh, 5rem)`, holding one centred 40rem column. On the homepage the order is hero, sheet (the pain argument), epigraph, sheet (the three door rows), green bay (two teasers), green close, footer, so the curtain is on screen more than half the time and the page ends within a few screens.

Three inner pages (`chi-sono.html`, `terapie.html`, `contatti.html`, titled "Dove e contatti"; there is no separate locations page) share the homepage's rail, sprite, footer, curtain and sheets, and add a **page head** in place of the hero: no curtain halves, no photo card, just the title block directly on the sage, padded `clamp(3rem, 9vh, 5.5rem)` above and `clamp(2rem, 6vh, 3.5rem)` below, followed by the same sheet-and-bay rhythm. Every page ends in a green closing band and then the footer. The home's door rows are the only place that links the inner pages besides the nav. Inner-page grids: **rows** (4fr label : 8fr text), **location-grid** (`5fr : 7fr`, same gap as two-col), **steps** (three-up numbered), **contact-grid** (two equal columns, gap `2.5rem 3rem`).

The sticky steel rail is 64px tall (`--rail-h`) plus its 14px steel border and holds brand (name over role), the four nav items (Home, Chi sono, Terapie, Contatti) at the right and a small blue `Prenota` pill. The hero fills `min(100svh − rail − 9px, 880px)`, with a 12 : 8 grid (`minmax(0,12fr) minmax(0,8fr)`) aligned to the bottom: copy on the left, the photo card on the right.

Inside paper, content uses three recurring grids: **two-col** (`5fr : 7fr`, gap `clamp(2rem, 5vw, 5rem)`) for a heading or portrait beside prose; **three-up** (`repeat(3, 1fr)`, gap `2.5rem 3rem`) for techniques and steps; **go-rows** (`4fr : 7fr : auto`, gap `0.4rem 2rem`) for the homepage doors; and, on a green bay, **duo** (two equal columns, gap `3rem clamp(2rem, 5vw, 5rem)`) for the two teasers. Vertical rhythm inside a bay: `2.5rem` before any grid or action row (`--block`), `1.5rem` between stacked elements (`.stack`), `1rem` between paragraphs. Actions sit in a wrapping flex row with `0.8rem 1rem` gaps.

Responsive rules, as built:
- **≤1100px:** three-up and four-up grids fall to two columns.
- **≤900px:** rows, location-grid, steps and duo collapse to one column (rows tighten to a `0.4rem` gap); each go-row becomes title and arrow on the first line with the description beneath, the arrow spanning both lines. The rail's `Prenota` hides and the nav wraps onto a second row of its own, bleeding to the viewport edges and wrapping rather than scrolling (no mask), with the hanging rings removed; nav items drop to 40px tall. The hero becomes one column, copy first, photo (max 440px, `4 / 4.2`) second; the curtain halves translate fully off-screen (`±100%`) rather than gathering at `±92%`. Two-col stacks. The fixed **mobile action bar** (two equal pills: `Chiama` ghost, `Prenota` primary) appears and the body gains `86px` bottom padding.
- **≤600px:** facts rows stack key over value (`0.15rem` gap) and the contact grid is one column; every grid is one column; buttons allow wrapping and hero buttons stretch to fill; the epigraph gains `1.25rem` side padding; footer stacks; experience rows stack their period tag under the text.

## Elevation & Depth

Depth is material, not tonal. The curtain itself is flat but textured: the body carries four stacked `repeating-linear-gradient` layers (a 72px pleat, a 113px secondary fold, a 301px slow drift at 91.5°, and a top-to-bottom darkening) fixed to the viewport so the pleats stay put while sheets scroll over them. Paper is lifted off the curtain by one long, soft, downward shadow and a 2px inner highlight along its top; photographs are lifted the same way with a drop-shadow filter that follows their silhouette. The primary pill casts a blue-tinted lift with a 1px inner highlight, so it reads as a solid object rather than a flat fill. Only the rail and the action bar are steel, and they cast the rail drop. Text, rules, ghost buttons and the curtain halves' body cast nothing; the halves only cast a side shadow along their gathered inner edge.

### Shadow Vocabulary
- **Paper lift** (`box-shadow: 0 30px 50px -30px rgba(0,0,0,0.55), 0 2px 0 rgba(255,255,255,0.25) inset`): sheets. The slip uses the first term only (no inner highlight).
- **Photo lift** (`filter: drop-shadow(0 24px 30px rgba(0,0,0,0.35))`): the hero photo card; portraits on paper use the lighter `drop-shadow(0 18px 24px rgba(0,0,0,0.25))`.
- **Button lift** (`box-shadow: 0 12px 24px -12px rgba(23,44,84,0.65), inset 0 1px 0 rgba(255,255,255,0.18)`, hover `0 16px 28px -12px rgba(23,44,84,0.7)` with the same inset): primary pills only; ghost pills are flat.
- **Rail drop** (`box-shadow: 0 10px 24px -14px rgba(0,0,0,0.6)`): the sticky rail; the action bar mirrors it upward (`0 -10px 24px -14px`).
- **Curtain edge** (`box-shadow: 14px 0 40px -10px rgba(0,0,0,0.55)` mirrored for the right half, plus a 26px inner gradient to `rgba(0,0,0,0.35)`): the gathered inner edges of the two curtain halves.

### Named Rules
**The Lifted Paper Rule.** Only things that physically sit on the curtain cast a shadow: paper, photographs, steel and the blue pill. Nothing on paper casts a shadow onto paper; hierarchy inside a sheet is done with rules, type and whitespace.

**The Fixed Pleat Rule.** The curtain texture is `background-attachment: fixed` so sheets scroll over a still curtain. Any new ground surface must keep the same four gradient layers and the 72px pleat pitch over Sage.

## Shapes

Two silhouettes coexist: everything is nearly square except the controls, which are pills. Corners are 4px (`md`) on images, the hero photo card and the bordered note; 3px (`sm`) on the footer's pending tag; buttons are full pills (`999px`) with the icon in a circle; nav rings and icon discs are round (`50%`).

The signature edge is the **perforation**: wherever paper meets curtain along its top, a 14px strip of Paper Shade fading into Paper carries a row of Sage dots (2.6px radius on a 14px pitch) so the sheet reads as torn from the bed's roll. The hero photo's caption strip uses the same device inverted and smaller (Paper Shade dots, 2.2px on a 12px pitch, 10px tall) along its own top edge.

Rules are 2px when they mark structure (the top of rows, go-rows, contact cells and the experience list, the ghost pill stroke, the 3rem epigraph rule) and 1px when they divide rows (Paper Shade on paper, `rgba(255,255,255,0.12)` on the dark footer). Rules drawn on the sage are ink at reduced alpha (`rgba(31,43,35,0.3)` for technique tops, `0.35` for the note's stroke); inside the slip they become Sage Light.

Steel surfaces are rectangles with a 1px white top edge and a vertical gradient to grey; the rail and action bar take it as a `border-image`, Images are tall: `3 / 3.6` for the hero card, `3 / 4` for portraits (the second portrait on `chi-sono.html` is cropped to `4 / 3` at `50% 22%`), cropped with `object-fit: cover`.

## Components

Tactile and plain: controls look like fittings from the room, not like web widgets; the pills are the one soft shape and read as something to press.

### Buttons
- **Shape:** pill (`999px`), 54px minimum height, `0.6rem 1.6rem 0.6rem 1.7rem` padding, Barlow Semi Condensed 600 1.12rem in sentence case, `0.75rem` gap to the icon. The icon sits in a **tinted circle** 1.75em across (`0.42em` padding) pulled `0.55em` into the end padding; it trails the label (`#i-ext`, `#i-video`) or leads it for the phone (`#i-phone`). External-link buttons carry a visually hidden "(si apre in una nuova pagina)" where the label alone would not say so.
- **Primary** (`Prenota su MioDottore`, `Prenota una visita`, `Prenota`): Scrub Blue on White, icon circle `rgba(255,255,255,0.18)`, button-lift shadow. The only element that uses blue as a fill.
- **Hover / Focus:** hover darkens to Scrub Blue Deep, lifts 1px and deepens the shadow; active returns to rest. Focus is the global ring (3px Scrub Blue at 3px offset; White inside the rail, action bar and footer). Transitions are 0.25s on the custom ease-out for transform and shadow, 0.2s for colours.
- **Ghost** (`351 374 4685`): transparent with a 2px `currentColor` stroke in Ink, Ink text, icon circle `rgba(31,43,35,0.08)`; hover inverts to an Ink fill with Paper text and a `rgba(255,255,255,0.15)` circle. The same ghost is used on sage and on paper. In the mobile action bar it is White with a `rgba(255,255,255,0.85)` stroke and inverts to White with Rail text.
- **Small** (`.btn-small`): 44px, 1rem, `0.35rem 1.1rem 0.35rem 1.2rem`; used only for the rail's `Prenota`.

### Text links
- **Text link** (`Tutte le terapie →`, `Approfondisci`, `Formazione ed esperienza`, `Le opinioni dei pazienti su MioDottore`): Barlow Condensed signage caps with a 2px `currentColor` underline rule and an arrow or external icon; hover widens the gap from 0.4rem to 0.7rem and slides the icon 3px right. Inherits Ink on sage and on paper.
- **Inline link** (`.link`: phone and practice-site values in facts lists): Source Sans 3 600 in Scrub Blue at 0.98rem with a leading or trailing icon, underline on hover.
- Plain anchors inherit colour and underline with a 2px thickness at 0.18em offset.

### Rail (navigation)
- **Style:** sticky, Rail green, with the 14px brushed-steel border-image on top and the rail drop shadow. Brand at left as name (Barlow Semi Condensed 600 1.35rem, White) over role (Barlow Condensed 500 0.8rem, Sage Light, uppercase 0.08em).
- **Nav items:** Barlow Condensed 600 1.02rem uppercase 0.07em, White, 44px tall, `0 0.85rem`. Each hangs from a **ring**: a 9px circle with a 2px Steel stroke, centred 5px above the item, at 0.45 opacity at rest.
- **Hover / Active:** hover turns the text Sage Pale and the ring opaque; `aria-current="page"` turns the text Sage Light and the ring opaque. Focus ring is White here.
- **Mobile (≤900px):** the rail's `Prenota` hides; nav wraps onto a second full-bleed row, four items, with the rings removed; the fixed action bar takes over the booking and call actions.

### Paper sheet
- **Corner Style:** square.
- **Background:** Paper with Ink text, `1180px + 2 gutters` wide, centred, `clamp(2rem, 5vh, 3.5rem)` of curtain between sheets.
- **Edge:** the 14px perforation strip along the top.
- **Shadow Strategy:** paper lift (see Elevation).
- **Internal Padding:** `clamp(2.5rem, 6vh, 4.5rem)` vertical inside the 1180px column, gutter horizontal.

### Paper slip
- A smaller sheet laid inside a green bay for copy too long for the curtain (the ozone techniques and their caution note). Same Paper, Ink and perforation edge, `2.5rem` below the bay's lead, padded `clamp(1.25rem, 3vw, 2.5rem)` on the sides and bottom with the intro paragraph starting `1.75rem` below the perforation. Inside it the technique rules and the note's stroke become Sage Light.

### Epigraph
- The Pavese line as its own band on the curtain between the first two sheets: a `blockquote` centred in a 40rem column, Barlow Semi Condensed 500 at the Quote size, Ink, balanced; the attribution (`Cesare Pavese`) in signage caps (600, 1rem, 0.1em) `1.1rem` below, preceded by a centred 3rem × 2px Ink rule with `0.9rem` beneath it. No paper, no shadow, no border; `aria-label="Citazione"`.

### Page head (inner pages)
- The title block of an inner page, directly on the curtain: Page title `h1` (Ink, 16ch), an optional signage byline in Ink (`Specialista in Anestesia, Rianimazione e Terapia del Dolore` on `chi-sono.html`), and a 1.3rem lead at most 58ch wide. No paper, no shadow, no ornament; the curtain is the page's opening line and the first sheet follows.

### Definition rows
- A `dl` laid on paper, one treatment or fact per row: a 2px Sage Light rule on top, rows of `1.4rem` vertical padding separated by 1px Paper Shade, a 4fr / 8fr grid with a `3rem` gap. The term is a Row term (Barlow Semi Condensed 600 1.35rem, Ink); the definition is Body in Ink at most 66ch, with `0.6rem` between paragraphs. Used for education and experience, and injection techniques. Below 900px term stacks over text.

### Location sheet and facts list
- A sheet per practice on `contatti.html` (anchors `#studio`, `#amana`, `#sassari`; the online bay is `#online`), laid out as a location grid: left, the practice name as Headline with its postcode and city as a signage byline; right, a **facts list** and an actions row. Facts are rows of a 9.5rem key column (Label Small caps, Ink Soft; `Indirizzo`, `Telefono`, `Sito`) and a value in Ink, `0.7rem` vertical padding, 1px Paper Shade dividers, none under the last; telephone and site values are blue inline links, the site with the external icon. Hours are never listed: the page lead sends the reader to the MioDottore agenda for them. The actions row pairs the primary pill `Prenota su MioDottore` with a ghost pill `Apri la mappa` (leading pin icon), `1.5rem` below the facts.

### Steps (numbered protocol on paper)
- The `terapie.html` three-step pathway: an ordered list of three columns (`2rem 3rem` gap), each a CSS-counter numeral (Barlow Condensed 600 3rem, leading 0.9, Sage Deep), an Ink signage `h3` at 1.15rem/0.05em and Ink body text, `0.5rem` apart. It collapses to one column below 900px.

### Contact grid
- Two equal columns on paper (`2.5rem 3rem` gap), each cell opened by a 2px Sage Light rule and `1.25rem` of padding, an Ink Soft signage `h3` (`Online`, `Per telefono`), Ink text `0.5rem` below, and either an actions row (primary pill `Prenota su MioDottore`) or the Phone number link.

### Phone number link
- The large call link (`351 374 4685`): Phone number type, a leading phone icon at 0.8em in Scrub Blue, Ink text, no underline; hover turns the text Scrub Blue. It is the page's one oversized control and exists on the contacts page only; the call pills elsewhere stay pills.

### Closing bands
- Every page closes on a green bay (`close-bay`) on the curtain, always an Ink heading and one of two patterns. **Action band:** Headline plus an actions row of primary `Prenota su MioDottore` and ghost `351 374 4685` (the homepage and `chi-sono.html` also add the reviews text link; `terapie.html` uses a short heading, `Parliamone in visita.`). **Notice band** (`contatti.html`, after the first-visit checklist): the heading `Questo non è un servizio di emergenza.` with the one lead line `In caso di urgenza chiama il 112.` and no buttons, because no booking action should sit next to an emergency instruction. A heading followed by a lead takes `1.25rem` between them (`.close-bay h2 + .prose`).

### Navigation state per page
- The rail and footer nav are identical on every page. On each page the rail item for that page carries `aria-current="page"` (Home on `index.html`, Chi sono, Terapie, Contatti on their own pages; the contacts page is the "Contatti" item), which gives it Sage Light text and an opaque ring; no other state differs. The footer nav is never marked. Booking exit pattern is unchanged: every booking action is `https://www.miodottore.it/profilo/valentina-tanga`, the phone number as `tel:`, or a link to the site's own pages (plus maps and each practice's own site on `contatti.html`).

### Experience list
- **Experience list:** a 2px Sage Light rule on top, rows of `0.8rem` with 1px Paper Shade dividers, text at left and a signage period tag (`Attuale`, `Esperienza`, 0.9rem, Ink Soft) at right. On `terapie.html` the same list carries the further therapies with no tag.

### Note
- A 1px `rgba(31,43,35,0.35)` stroke box at 4px radius, `1rem 1.25rem` padding, 66ch wide, Ink text; inside the slip the stroke is Sage Light.

### Door rows (homepage)
- The "Cosa trovi in questo sito" sheet: an unordered list under a 2px Sage Light top rule, each row a whole-row link (`Le terapie`, `Chi sono`, `Dove e contatti`) in a `4fr : 7fr : auto` grid with a `0.4rem 2rem` gap and `1.35rem` vertical padding, 1px Paper Shade between rows. The title is the Row term in Ink; a short description in Body Ink at most 52ch; the trailing arrow icon is 1.4rem in Scrub Blue and slides 4px right on hover while the title underlines (2px, 0.2em offset). Below 900px the arrow spans both lines at the right. These rows are the homepage's only navigation to the inner pages other than the rail; no icon cards.

### Teaser duo (homepage)
- A green bay holding two equal columns, each a Headline at the reduced `clamp(1.8rem, 1.2rem + 1.8vw, 2.6rem)` (`Ossigeno-ozono terapia`, `Consulenza online`), one Lead sentence in Ink and a text link (`Come funziona` to `terapie.html#ozono`, `Come si svolge` to `contatti.html#online`). It keeps to the green-bay rule: heading, one lead sentence, one action. Stacks below 900px.

### Checklist
- Rows of 1.15rem Ink text with a leading Moss check icon (`0.8rem` gap, `0.75rem` between rows, icon nudged `0.3em` down to sit on the first line).

### Hero photo card
- The photograph (`3 / 3.6`, 4px top corners, `object-position: 55% 30%`) over a Paper caption strip (Ink Soft signage caps at 0.95rem, 4px bottom corners) whose top edge carries the small perforation; the whole card takes the photo-lift drop shadow and is aligned to the bottom of the hero grid.

### Curtain (hero motion)
- Two absolutely positioned halves, each 50% wide, in Sage Fold with their own tighter pleat set (`--p: 34px`, plus a 53px secondary fold), masked to fade out over the bottom 20%, with a 26px darkened inner edge and the curtain-edge shadow. On load they translate from the centre to `±92%` over 1.5s on `cubic-bezier(0.16, 1, 0.3, 1)` after a 0.35s delay, so a gathered fold remains visible at each side on desktop; below 900px they go to `±100%`. The hero content fades up 14px over 1s starting at 1s. Under `prefers-reduced-motion: reduce` both animations are removed and the halves are rendered already open.

### Mobile action bar
- Fixed to the bottom from 900px down: Rail green with the 6px steel border-image on top and the upward rail shadow, `0.6rem` padding plus the safe-area inset, two equal columns at a `0.6rem` gap. Left a White ghost `Chiama`, right a primary `Prenota`, each 50px tall and centred. Hidden on desktop, where the rail carries the same actions.

### Footer
- Rail green with Sage Pale text at 1rem and a 1px `rgba(255,255,255,0.12)` top rule; name in Barlow Semi Condensed 600 1.25rem White, a White signage nav at right (hover Sage Light), `2.5rem` vertical padding. The pre-launch `.pending` line is a dashed amber tag (`#f0c56a` stroke, `#f6d89a` text, 3px corners) in Barlow Condensed 500 at 1rem, sentence case, tracked 0.03em; it is a placeholder, not a component.

## Do's and Don'ts

### Do:
- **Do** keep the sage curtain as the ground of every page and let it show between sheets; a new page starts from `#9db09a` with the four fixed pleat layers, never from white.
- **Do** set text on the curtain in Ink (`#1f2b23`), and reserve white text for the dark fittings (`#2f3f34`: rail, footer, action bar).
- **Do** put any copy longer than one lead sentence on paper (a sheet or a slip) in Ink; keep green bays to heading, lead and action.
- **Do** give every paper edge that meets the curtain the 14px perforation strip of Sage dots.
- **Do** use Scrub Blue only for primary pills, inline links and the focus ring; keep ghost pills Ink-stroked (White only inside the action bar).
- **Do** build buttons as 54px pills in Barlow Semi Condensed sentence case with the icon in a tinted circle at the trailing end (leading for the phone).
- **Do** set labels, nav and `h3` in Barlow Condensed uppercase tracked 0.06–0.1em, headings in Barlow Semi Condensed 600, and everything readable in Source Sans 3 at 1.125rem/1.6 on a 66ch measure.
- **Do** keep tap targets at 44px or more (54px pills, 44px small pills and nav, 50px on the action bar) and keep the fixed action bar on every page below 900px.
- **Do** mark external links with the `#i-ext` icon and visually hidden text, and show the phone number as digits in the call button.
- **Do** open every inner page with a page head directly on the curtain (Page title, optional byline, 1.3rem lead) and close it with a green band.
- **Do** use definition rows for lists of treatments and credentials, and facts lists for a practice's address, phone and site.
- **Do** keep every booking action pointing at MioDottore, the phone, or the site's own pages, and let the emergency notice band stand without buttons.
- **Do** honour `prefers-reduced-motion` by removing both hero animations and rendering the curtain open.

### Don't:
- **Don't** use Scrub Blue, or any other saturated colour, for headings, rules, icons at rest or backgrounds.
- **Don't** put white text on any sage (`#9db09a`, `#7f9480`) or use the dark green as a page ground.
- **Don't** put shadows under elements that sit on paper, or under text; only paper, photographs, steel and the blue pill cast shadows.
- **Don't** set buttons in uppercase or in Barlow Condensed; signage caps are for labels, never for pills.
- **Don't** add a second accent, a kicker above headings, or a display-size setting outside the hero hook and the inner-page title.
- **Don't** put a button beside the emergency notice, or add display-size type to an inner page beyond the one title.
- **Don't** invent opening hours or claim mechanisms or comparisons for a therapy; copy stays descriptive and points to the visit and the MioDottore agenda.
- **Don't** make the homepage a long brochure: it points to the inner pages with door rows and teasers rather than repeating their content.
- **Don't** use stock photography, decorative anatomy, or icon cards; the only images are the client-approved photographs with their provenance sidecars.
- **Don't** round corners beyond 4px except on pills; the only circles are the button icon discs and the nav rings.
- **Don't** use steel greys as text colours, or steel anywhere other than the rail and the action bar's edge.
