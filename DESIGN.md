---
name: Master Universal Design Template
colors:
  surface: '#F2F3F4'
  surface-dim: '#d9dae1'
  surface-bright: '#F2F3F4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3fa'
  surface-container: '#ededf5'
  surface-container-high: '#e7e8ef'
  surface-container-highest: '#e1e2e9'
  on-surface: '#191c21'
  on-surface-variant: '#424751'
  inverse-surface: '#2e3036'
  inverse-on-surface: '#f0f0f8'
  outline: '#727783'
  outline-variant: '#c2c6d3'
  surface-tint: '#175ead'
  primary: '#003e7a'
  on-primary: '#ffffff'
  primary-container: '#0055a4'
  on-primary-container: '#afccff'
  inverse-primary: '#a8c8ff'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fd'
  on-secondary-container: '#57657b'
  tertiary: '#6a2c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#8f3d00'
  on-tertiary-container: '#ffbc99'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#a8c8ff'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#004689'
  secondary-fixed: '#d5e3fd'
  secondary-fixed-dim: '#b9c7e0'
  on-secondary-fixed: '#0d1c2f'
  on-secondary-fixed-variant: '#3a485c'
  tertiary-fixed: '#ffdbca'
  tertiary-fixed-dim: '#ffb690'
  on-tertiary-fixed: '#331100'
  on-tertiary-fixed-variant: '#783200'
  background: '#F2F3F4'
  on-background: '#191c21'
  surface-variant: '#e1e2e9'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  title-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: '1.4'
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  data-tabular:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.5'
    letterSpacing: 0em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin: 24px
---

## Purpose of This Document

This is the master reference for every design decision across projects — not a one-off spec. When starting a new interface, a new component, or resolving any ambiguity about how something should look or behave, this document is the source of truth. The goal is that a stock ledger, a dashboard, a form, and a settings page all read as products of the same hand.

## Governing Principle: Function Over Form

When form and function conflict, function wins. Every element on screen must justify its existence through use — what it does, what it communicates, what task it enables. Decoration, novelty, and visual flourish are permitted only after the functional requirement is fully met, and only if they don't cost clarity, speed, or honesty. This is the single filter to run every design decision through before any other consideration (brand mood, trend, personal taste) is allowed a vote.

This principle governs the two philosophies below: Bauhaus supplies the *why* (design is a rational, functional discipline), Dieter Rams supplies the *how* (ten checkable qualities good design exhibits in practice).

## Bauhaus Design Principles

1. **Form follows function.** Design serves purpose first, decoration comes second or not at all. *In practice: no element ships because it "looks nice" — it ships because it does something.*
2. **Unity of art and craft.** No hierarchy between fine art and applied craft; architects, painters, and craftsmen work as equals. *In practice: visual design, interaction design, and engineering are one discipline here, not a chain of handoffs.*
3. **Geometric simplicity.** Basic shapes — circles, squares, triangles — form the visual vocabulary. *In practice: components are built from rectangles and the occasional circle (see Shapes); avoid organic, arbitrary, or decorative silhouettes.*
4. **Truth to materials.** Materials show their nature: steel looks like steel, glass looks like glass. *In practice: a button looks pressable, a border looks like a boundary, data looks like data (fixed-width type) — nothing pretends to be a material it isn't (no fake skeuomorphic textures).*
5. **Mass production compatibility.** Design for industrial manufacturing, not one-off craftsmanship. *In practice: every element is a reusable token or component, never a bespoke one-off — if it can't be reused, redesign it until it can.*
6. **Rationality and functionalism.** Every element earns its place through use, not tradition or ornament. *In practice: "we've always done it this way" is not a justification; "the user needs this to complete the task" is.*
7. **Primary colors and neutral tones.** Red, yellow, blue paired with black, white, and gray. *In practice: this system's Bauhaus Blue primary plus the red/yellow/green semantic set, laid over a disciplined neutral scale, is the direct digital descendant of this rule.*
8. **Typography as design.** Sans-serif type, grid-based layouts, clear hierarchy. *In practice: Inter for UI, a strict 4px baseline grid, and a small, deliberate type scale (see Typography) — no display serifs, no ungoverned font sizes.*
9. **Integration of disciplines.** Architecture, product design, typography, and art share one coherent language. *In practice: color, type, spacing, and shape tokens are shared across every surface — a spacing value or radius never means one thing in one component and something else in another.*
10. **Democratization of design.** Good design should reach everyone, not stay a luxury for the few. *In practice: accessibility (contrast, legible type sizes, honest affordances) is a baseline requirement, not a nice-to-have layered on later.*

## Dieter Rams' 10 Principles for Good Design

1. **Good design is innovative.** Innovation follows the tools and problems available; it's not novelty for its own sake.
2. **Good design makes a product useful.** Emphasize usefulness, discard everything not serving it.
3. **Good design is aesthetic.** Aesthetics are part of usefulness — well-executed objects are used every day and affect people's well-being.
4. **Good design makes a product understandable.** It clarifies the product's structure; ideally it's self-explanatory.
5. **Good design is unobtrusive.** Products serving a purpose are tools, not decorative objects or works of art. They leave room for the user's self-expression.
6. **Good design is honest.** It doesn't make a product appear more capable, valuable, or innovative than it is, and doesn't manipulate the user.
7. **Good design is long-lasting.** It avoids being fashionable, and therefore never appears antiquated. It lasts many years, even in today's throwaway society.
8. **Good design is thorough down to the last detail.** Nothing is arbitrary or left to chance. Care and accuracy in the design process show respect for the user.
9. **Good design is environmentally friendly.** Design makes an important contribution to the preservation of the environment — it conserves resources and minimizes waste, physical and digital.
10. **Good design is as little design as possible.** Less, but better — concentrate on the essential aspects, and don't burden products with non-essentials. Back to purity, back to simplicity.

## Success Criteria

These guidelines are working if, over time, you see:

- **Fewer unnecessary changes in diffs.** Once a component or token exists, it gets reused rather than reinvented or re-styled per screen.
- **Fewer rewrites due to overcomplication.** The first version of a component is close to the final version because it was built at the "as little design as possible" level from the start.
- **Clarifying questions come before implementation, not after mistakes.** Ambiguity about a new pattern gets resolved against this document *before* code is written, not discovered as a fix after the fact.

If a project starts drifting from these signs, the fix is to re-read this document before adding more design, not to add process on top of the drift.

## Brand & Style

The design system is rooted in **Industrial Minimalism**, drawing direct inspiration from Bauhaus principles and the functionalist ethos of Dieter Rams. It is engineered for data-dense, high-precision tools — inventory ledgers, dashboards, operational consoles — where clarity, precision, and speed of information retrieval are paramount, and is intended as the default starting point for any new interface, not just one product.

The brand personality is authoritative, systematic, and utilitarian. Every visual element serves a functional purpose; decoration is removed to eliminate cognitive load. The aesthetic utilizes a rigid grid, 1px geometric borders, and high-contrast surfaces to create a "digital machine" feel that mimics technical schematics and physical ledger cards.

## Colors

The palette uses a foundation of neutral slates to provide a non-distracting work environment, punctuated by high-chroma primary colors for functional signaling.

- **Base Background — Anti-Flash White (`#F2F3F4`):** The default canvas for `background`, `surface`, and `surface-bright`. Slightly warmer and softer than pure white, it reduces glare in dense, text-heavy layouts while staying neutral enough not to bias any content placed on it.
- **Primary (Bauhaus Blue):** Reserved for primary actions, active input states, and focal points of calculation.
- **Semantic Palette:** Red, Yellow, and Green are used strictly for status reporting (Shortage/Error, Warning, In-Stock/Success). Never use semantic colors decoratively.
- **Neutral/Surface:** A tiered gray scale manages hierarchy. The base canvas (`background`/`surface`) sits at Anti-Flash White; elevated cards and active work areas (`surface-container-lowest`) use pure white for maximum contrast with text and data.
- **Borders:** All separators and borders use a consistent light `outline-variant` tone for low-emphasis divisions, or the darker `outline`/`on-surface` tone where higher emphasis or a hard stop is required (e.g. table header rules, modal borders).

## Typography

Typography is divided into two functional roles: **System Navigation** and **Data Integrity**.

1.  **Inter (UI/Navigation):** Used for all labels, headings, and instructional text. It provides a clean, modern grotesque look that remains legible at small sizes.
2.  **JetBrains Mono (Data/Numbers):** Critical wherever precise values are shown. All counts, IDs/SKUs, currency values, and timestamps must use JetBrains Mono. Its tabular figures ensure that columns of numbers align perfectly, letting people scan values vertically without ocular drift.

**Scale:**
- Use `label-caps` for table headers, form labels, badges, and metadata descriptors.
- Use `data-tabular` for all numeric entries, IDs, and timestamps in tables, ledger cards, and detail views.
- Use `display-lg` sparingly — page-level or dashboard hero numbers only, never body content.
- Use `headline-md` for section titles, `title-sm` for card/panel titles, `body-md` for all prose and descriptions.

## Layout & Spacing

This design system employs a **Fixed Grid** philosophy. All layouts should be anchored to a 4px baseline grid to ensure geometric alignment.

- **Desktop Layout:** 12-column grid with a fixed maximum width of 1440px to prevent excessive line lengths in data tables.
- **Split Views:** Where a filtering/navigation pane accompanies a primary content pane, use a 25% / 75% split — filters and categories on the left, primary content on the right.
- **Density:** High density is preferred. Vertical spacing in tables and dense lists should be tight (`8px` top/bottom padding) to maximize the information visible above the fold.
- **Reflow:** On smaller screens (tablets), sidebars collapse into a drawer, and dense tables transition to horizontal scroll to maintain the integrity of tabular data columns rather than reflowing columns into stacked cards.

## Elevation & Depth

Elevation is primarily communicated through **1px Borders** and **Tonal Layering** rather than traditional shadows.

- **Level 0 (Background):** `background` / `surface` — Anti-Flash White (`#F2F3F4`).
- **Level 1 (Cards/Ledger):** `surface-container-lowest` (white) with a 1px `outline-variant` border. No shadow.
- **Level 2 (Modals/Overlays):** `surface-container-lowest` (white) with a thin 1px `on-surface` border. A subtle **Backdrop Blur (8px)** is used behind modals to maintain context of the underlying content while providing focus.
- **Active State:** Elements being edited gain a `primary` 1px border (thickening to 2px internally) and a subtle inner glow to denote focus.

## Shapes

The shape language is rigid and geometric.
- **Default Radius:** 4px (`rounded.DEFAULT`) for most components to prevent "sharpness fatigue" while maintaining a precise, industrial look.
- **Interactive Elements:** Buttons, input fields, and dropdown triggers use the 4px radius.
- **Inner Elements:** Nested items (tags, chips, checkboxes) use a 2px radius (`rounded.sm`) or remain sharp (0px) to contrast against their container.
- **Circular Exception:** Full radius (`rounded.full`) is reserved for elements whose meaning depends on circularity — radio buttons, person avatars, pagination page-dots. Never use it decoratively on rectangular components (buttons, cards, panels).
- **Separators:** Use 1px solid lines for horizontal/vertical separators. Avoid dashed or dotted lines.

## Components

- **Buttons:** Rectangular with 4px radius. Primary buttons use a solid `primary` background with `on-primary` text. Secondary buttons use a 1px `outline` border with no fill. Destructive actions use `error`/`on-error`.
- **Data Tables / Ledgers:** The core component for dense information. Rows alternate with a very subtle `surface-container-low` zebra stripe. Header cells use `label-caps` and have a 2px bottom border in `on-surface`.
- **Input Fields:** 1px solid `outline` border. When focused, the border color changes to `primary` and thickens to 2px internally. Label text is always visible above the field (never floating, never placeholder-only).
- **Status Chips:** Small, rectangular (2px radius) chips with a light tinted `*-container` background and dark `on-*-container` text (e.g. `error-container` background with `on-error-container` text for "Shortage").
- **Badges / Tags:** Distinct from Status Chips — used for neutral counts and labels rather than semantic status. Rectangular, 2px radius, `label-caps` text on `surface-container-high` background with `on-surface-variant` text. A numeric count badge (e.g. notifications) uses `error`/`on-error` and stays near-square rather than pill-shaped.
- **Detail/Summary Cards:** Large container components for a single record's full detail (e.g. a stock card). Feature a header section with the primary identifier in `data-tabular` and a high-contrast summary bar showing the key current value.
- **Dropdown / Select:** Trigger styled identically to Input Fields (1px `outline` border, 4px radius, visible `label-caps` label above). On open, border becomes 2px `primary`; the option panel uses `surface-container-lowest` with a 1px `outline-variant` border (Level 1 elevation — no blur, it's inline, not modal). Options are `body-md` with tight (`8px`) vertical padding; hover state is `surface-container-high`. The selected option uses `primary-container`/`on-primary-container`. Multi-select values render as removable Badge-style chips inside the trigger.
- **Modal / Dialog:** Matches Elevation Level 2 exactly — `surface-container-lowest` surface, 1px `on-surface` border, 8px backdrop blur behind. Header uses `title-sm` with a 1px `outline-variant` bottom border and a top-right close action. Footer right-aligns actions (Primary + Secondary buttons). Radius stays at the standard 4px — never full-rounded, to preserve industrial rigidity even at this scale.
- **Tooltip:** `body-md` text at reduced size, `inverse-surface` background, `inverse-on-surface` text, 4px radius, no border and no shadow (ambient, temporary — doesn't carry the permanent-element border treatment). Appears on hover/focus after a short delay, anchored `4px` (`spacing.xs`) from its trigger.
- **Tabs:** Underline style, not filled pills, to stay consistent with the geometric/grid language. Active tab: `primary` 2px bottom border, `on-surface` text. Inactive tab: `on-surface-variant` text, no border; hover reveals an `outline-variant` 1px bottom border. The full tab row sits on a full-width 1px `outline-variant` baseline.
- **Checkboxes & Radios:** 16px square hit area. Checkbox uses a 2px radius (inner-element rule); Radio is the sanctioned circular exception since circularity carries its meaning. Both: 1px `outline` border unchecked, `primary` fill with `on-primary` glyph when checked/selected, and the same 2px inner-glow focus treatment as Input Fields.
- **Switches / Toggles:** Track is rectangular with 4px radius (not pill), a deliberate departure from typical rounded switches to preserve the rigid geometric language. Off state: `surface-container-high` track, `outline` border, `on-surface-variant` thumb. On state: `primary` track, `on-primary` thumb. Thumb is a small square with 2px radius, not circular.
- **Pagination:** Page numerals use `data-tabular` (they are data, not labels) so digits align. Current page: `primary` background, `on-primary` text, 4px radius square. Other pages: transparent background, 1px `outline-variant` border appears only on hover. Prev/next controls follow the Secondary Button spec.
- **Breadcrumbs:** `label-caps` text per segment — `on-surface-variant` for ancestors, `on-surface` for the current segment. Separator is a plain `/` or `›` glyph in `outline`, never an icon-heavy chevron button.
- **Accordion:** Header row matches the Data Table header treatment — `label-caps`, 1px bottom `outline-variant` border, right-aligned chevron indicator. Expanded panel has no shadow, just continues the 1px border rhythm; content padding follows the `16px` (`spacing.md`) rule.
- **Avatar:** Square with 4px radius by default, in keeping with the shape language; circular (`rounded.full`) only when representing a person, per the Circular Exception. Initials fallback uses `label-caps` text centered on a deterministic `secondary-container`/`tertiary-container` background pairing.
- **Toast / Snackbar:** Anchored bottom-right. `inverse-surface` background, `inverse-on-surface` text, 4px radius, no border (temporary, ambient). Status toasts (success/error/warning) tint using the same semantic palette as Status Chips, but at full saturation (e.g. `error` background with `on-error` text) rather than the light `-container` tint, since toasts float over varied content and need to hold contrast on their own.

## Design Languages (Reference Glossary)

This system's own direction is **Industrial Minimalism** (see Brand & Style) — a functionalist blend closest to Minimalism and Brutalism below. The rest of this list is kept as shared vocabulary for briefs, mood boards, and conversations about other projects; adopting a different language for a specific project is a deliberate decision to make explicitly, not something to drift into by default.

1. **Skeuomorphism** — UI elements mimic real-world objects and textures (wood grain, leather, drop shadows imitating physical depth) so their function is recognizable at a glance.
2. **Neomorphism** — Soft, extruded shapes in a monochrome palette, using subtle dual shadows to suggest elements are pressed into or raised from the same surface.
3. **Glassmorphism** — Frosted-glass panels: background blur, translucency, and a thin light border, layered over colorful or busy backgrounds.
4. **Claymorphism** — Soft, inflated 3D shapes with rounded edges and gentle shadows, evoking molded clay or plastic toys.
5. **Minimalism** — Reduction to essential elements only; generous whitespace, restrained color and type, function stated as plainly as possible. Closest sibling to this system's own direction.
6. **Maximalism** — Deliberate abundance: dense layering of color, pattern, and content, rejecting restraint as the default virtue.
7. **Brutalism** — Raw, unpolished, structurally honest interfaces; system fonts, visible grids, minimal ornamentation, function exposed rather than smoothed over. Also a close sibling to this system's rigid-grid, border-driven aesthetic.
8. **Liquid Glass** — Refractive, fluid glass-like surfaces with dynamic light distortion and depth, reacting to content or motion behind them.
9. **Spatial UI** — Interfaces designed for 3D/mixed-reality space, where depth, physical placement, and gaze/gesture replace flat 2D layout conventions.
