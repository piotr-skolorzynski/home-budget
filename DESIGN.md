# Design System Specification

## 1. Overview & Creative North Star: "The Editorial Ledger"

This design system moves away from the "utility-first" clutter of standard financial apps toward **The Editorial Ledger**. Our Creative North Star is a high-end, bespoke digital experience that treats financial data with the same reverence as a premium fashion magazine or a legacy architectural journal.

We break the "template" look by utilizing **intentional asymmetry** and **tonal depth**. Rather than a rigid grid of boxes, we use expansive breathing room (white space) and a sophisticated typographic scale to guide the eye. The interface should feel like a series of layered, semi-transparent sheets of fine vellum, where the UI isn't "built" but "composed."

---

## 2. Colors & Surface Philosophy

The palette is rooted in a professional "Winter" clarity and a high-contrast "Dracula" depth. However, the application of these colors is where the premium identity is forged.

### The "No-Line" Rule

**Strict Mandate:** 1px solid borders for sectioning are prohibited.

Visual separation must be achieved through background shifts. For example, a `surface-container-low` component should sit on a `surface` background. This creates a "soft edge" that feels integrated and expensive rather than boxed-in.

### Surface Hierarchy & Nesting

Treat the UI as a physical stack. Use the tier system to define importance:

- **Base Layer:** `surface` (The canvas).

- **Secondary Content:** `surface-container-low` (Subtle grouping).

- **Primary Interaction:** `surface-container-lowest` (Cards that need to pop).

- **Floating Elements:** `surface-bright` with 80% opacity and a 12px `backdrop-blur`.

### Signature Textures (The Glass & Gradient Rule)

To move beyond "flat" design, all Primary CTAs and Hero Charts must utilize a subtle linear gradient:

- **Gradient Path:** `primary` (#006591) to `primary-container` (#0ea5e9) at a 135-degree angle.

- **Glassmorphism:** Use `surface_variant` at 40% opacity with `backdrop-filter: blur(8px)` for navigation bars and floating modals to create a sense of environmental depth.

---

## 3. Typography: The Authority of Scale

We use a dual-font strategy to balance human-centric UI with cold, hard financial precision.

- **UI & Editorial (Manrope/Inter):** Used for all navigation and headers. The `display-lg` (3.5rem) and `headline-lg` (2rem) scales are used aggressively to create an "editorial" feel, often left-aligned with significant padding to create asymmetric balance.

- **Data & Currency (Monospace):** All currency figures, percentages, and table data _must_ use `font-mono`. This provides a rhythmic, mechanical contrast to the fluid sans-serif UI, signaling accuracy and professional "ledger" heritage.

**Hierarchy Note:** Use `on_surface_variant` for labels to create a "muted" secondary layer, allowing the primary data (in `on_surface`) to stand out without increasing font weight.

---

## 4. Elevation & Depth: Tonal Layering

Traditional drop shadows are too "web 2.0." We define depth through **Tonal Layering** and **Ambient Shadows**.

- **The Layering Principle:** Stack `surface-container` tiers. A `surface-container-highest` element should only exist inside a `surface-container` parent to denote a "pressed" or "nested" relationship.

- **Ambient Shadows:** When an object must "float" (e.g., a Quick-Add FAB), use:

- `box-shadow: 0 20px 40px -10px rgba(25, 28, 30, 0.08);` (A tinted, diffused shadow using the `on_surface` color).

- **The Ghost Border:** If accessibility requires a stroke, use `outline_variant` at **15% opacity**. Never use 100% opaque outlines.

---

## 5. Components

### Buttons & Interaction

- **Primary:** Uses the "Signature Gradient" with `rounded-btn` (0.5rem). No border.

- **Secondary:** `surface-container-high` background with `on_surface` text.

- **Tertiary:** Transparent background, `primary` text, with a subtle `surface-variant` hover state.

### Financial Cards

- **Style:** `rounded-box` (1rem).

- **Layout:** Forbid divider lines. Use `spacing-8` (2rem) of vertical white space to separate the "Balance" from the "Transaction List."

- **Typography:** The balance figure should use `display-md` in `font-mono`.

### Inputs & Fields

- **Container:** `surface-container-low` background.

- **State:** On focus, the background shifts to `surface-container-lowest` and a "Ghost Border" of `primary` (20% opacity) appears.

### Charts (Recharts)

- **Styling:** Lines should have a stroke width of 3px. Use `primary` for the main trend and `tertiary` (#8a5100) for comparisons.

- **Grid:** Hide all vertical grid lines. Horizontal grid lines must be `outline_variant` at 10% opacity.

---

## 6. Do’s and Don’ts

### Do

- **DO** use asymmetric padding (e.g., more padding on the left of a container than the right) to create an editorial layout.

- **DO** use `font-mono` for every single numeral, including dates and timestamps.

- **DO** leverage `backdrop-blur` on all sticky headers to maintain a sense of UI "materiality."

### Don’t

- **DON'T** use `border-solid`. If you think you need a line, use a background color change instead.

- **DON'T** use pure black for text. Always use `on_surface` or `on_surface_variant` for a softer, premium contrast.

- **DON'T** crowd the screen. If a page feels full, increase the spacing from `spacing-4` to `spacing-8`.
