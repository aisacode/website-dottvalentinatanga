---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Homepage (index.html)

Scope: the site's front door. Mode: Persuade, informational register. Multi-page site; this page summarises Chi sono, Terapie, Dove ricevo, Contatti and sends every booking action to the MioDottore profile or the phone number.

## Audience and job
Adults in the Cagliari and Sassari areas with pain a first drug-based approach did not fix, mostly on a phone in the evening; relatives and referring doctors second. They must understand that persistent pain is a symptom to investigate and treat, see who she is and where she works, and reach MioDottore or the phone without hunting.

## Action and proof
Primary: link to https://www.miodottore.it/profilo/valentina-tanga labelled as booking. Secondary: call 379 208 2755. Proof only from what exists: credentials and hospital experience, the brochure's conditions list and three-stage pathway, the three approved photos, four locations, a link to the MioDottore reviews. No prices, statistics, quoted reviews, stock imagery, or Villa Esperia identity. Studio Beta stays off.

## Sequence (bays)
1 Hero · 2 Perché e quando (brochure argument, Pavese quote as a moment) · 3 Di cosa mi occupo (conditions grouped by region) · 4 Come si cura (three stages) · 5 Ossigeno-ozono terapia, highlighted · 6 Chi sono · 7 Consulenza online, highlighted · 8 Dove ricevo (three physical + online) · 9 La prima visita: cosa portare · 10 Close with actions, reviews link, footer.

## States and ranges
Fifteen conditions, grouped. Four locations. Three photos; the scrubs photo is low resolution and cropped tightly. Reduced motion renders the curtain open. Mobile keeps a persistent bottom action bar. Content readable without JavaScript.

## Constraints and open decisions
Static HTML/CSS, Italian, WCAG 2.2 AA working standard, body text only on paper white, fonts self-hosted, images with provenance. Open, never invented: domain and hosting, Ordine registration number and VAT line, privacy text, MioDottore widget vs link, WhatsApp, opening hours, final copy approved by the doctor.

## Build decisions recorded at finish review
- Ground darkened from the contract's #2F7A68 to #27665A so body copy on the curtain (#D5EDE3) reaches 5.4:1, the brief's WCAG 2.2 AA standard; hue unchanged.
- Long copy on the green bays (ozone techniques and note) sits on a paper slip laid on the curtain; the green bays keep only heading, one lead sentence and the action.
- Copy is written in the first person, following the MioDottore profile rather than the brochure's impersonal voice. Pending the doctor's approval of the final copy; revert to third person if she prefers.
- Footer carries a visibly flagged pending line for the Ordine registration number, VAT and privacy notice; it must be replaced before launch.

## Revisions after the finish review (user feedback, 2026-10-25)
- The curtain is sage, not deep green: ground #9DB09A with ink text on it; rail, footer and mobile action bar stay dark (#2F3F34) with white text. The world and its materials are unchanged; only the tone of the fabric.
- Buttons are pills in Barlow Semi Condensed, sentence case, with the icon in a tinted circle; the plaques use a text link for booking instead of a button.
- The Pavese quote is its own centred band on the curtain between the first two sheets, no longer inside a sheet column.

## Direction contract
THESIS: The homepage is the treatment room itself: a green hospital curtain as the ground, paper-white sheets for reading, scrub blue only where the visitor acts. It refuses the category's white page with a smiling-doctor hero, a blue accent and three icon cards.
OWN-WORLD: Pleated curtain green (#2F7A68 ground, #9BCDB9 pleat light) owns the page; paper-white sheets (#F6F4EE) with a perforated top edge, like the bed's paper roll, carry long copy; scrub blue (#2B5DA8) is the only action colour; a brushed-steel rail with hooks runs the top and carries the navigation; labels in condensed signage caps (Barlow Condensed), hook and headings in Barlow Semi Condensed, body in Source Sans 3; location names as door plaques; stages numbered like a treatment protocol.
STORY: Persistent pain is a symptom to investigate, not endure; this specialist finds the cause and treats it with a graded range of techniques in Cagliari, Sassari and online; the visitor books on MioDottore or calls.
FIRST VIEWPORT: Curtain edge to edge, rail with nav on top. Left 60%: the hook in four lines at about 68px on desktop (the confirmed sentence does not set in fewer at this size in a 60% column) and never under 40px on a phone (name and title live in the rail brand; a kicker above the hook is omitted under the craft-floor ban), two actions (blue Prenota, white-outline Chiama). Right 40%: the scrubs photo in a tall panel standing at the bed. The curtain halves part on load and gather at the sides; below 900px they part fully off-screen, since a 390px column leaves no room for gathered folds beside it.
FORM: L'ambulatorio, candidate 6 of 7 on my ordered list, assigned by the roll; seed:ac707c5cbf2a06c3.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
