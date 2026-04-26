---
name: Modern Media Excellence
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c9c6c5'
  primary: '#c9c6c5'
  on-primary: '#313030'
  primary-container: '#0a0a0a'
  on-primary-container: '#7b7979'
  inverse-primary: '#5f5e5e'
  secondary: '#b8c3ff'
  on-secondary: '#002388'
  secondary-container: '#0043eb'
  on-secondary-container: '#c6ceff'
  tertiary: '#c8c6c5'
  on-tertiary: '#313030'
  tertiary-container: '#0a0a0a'
  on-tertiary-container: '#7a7979'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#dde1ff'
  secondary-fixed-dim: '#b8c3ff'
  on-secondary-fixed: '#001356'
  on-secondary-fixed-variant: '#0035be'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display-xl:
    fontFamily: Epilogue
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Epilogue
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Epilogue
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 32px
  margin-x: 64px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
  section-padding: 120px
---

## Brand & Style

The brand personality is rooted in exclusivity, cinematic energy, and precision. This design system targets high-tier corporate clients and luxury lifestyle brands, evoking an emotional response of "effortless prestige." 

The chosen style is **Modern Minimalism with Glassmorphic accents**. It prioritizes high-quality imagery and negative space to allow the media content to act as the primary visual driver. By utilizing deep blacks and a singular high-energy accent, the interface feels like a digital concierge—sophisticated, unobtrusive, and powerful.

## Colors

The palette is anchored by "Absolute Void" (#0a0a0a) to provide maximum depth for media assets. 

- **Primary:** Deepest black for the main canvas.
- **Secondary (Accent):** "Electric Cobalt" (#2E5BFF). This color is used sparingly for critical calls to action and active states, providing a high-contrast spark against the dark background.
- **Surface Tiers:** Dark grays (#121212, #1a1a1a) are used to create structural hierarchy without breaking the dark-theme immersion.
- **Typography:** High-contrast whites (#FFFFFF) for headers and muted silver-grays (#94a3b8) for secondary body text to ensure legibility and visual hierarchy.

## Typography

This design system utilizes **Epilogue** for headings to provide a distinctive, editorial character that feels both contemporary and premium. The bold weights of Epilogue create a commanding presence for event titles and value propositions.

**Inter** is the workhorse for all functional text. It was selected for its exceptional legibility at small sizes and its neutral, systematic aesthetic that doesn't compete with the expressive headers. Use the `label-caps` style for section headers and small navigational cues to introduce a sense of architectural order.

## Layout & Spacing

The design system employs a **Fixed Grid** model to maintain a sense of curated, gallery-like composition. On desktop, content is constrained to a 1280px wide container to prevent line-lengths from becoming unreadable on ultra-wide monitors.

Spacing is generous, utilizing a "breathable" rhythm. Section-to-section transitions should use significant vertical padding (120px+) to distinguish different event categories or service offerings. The 32px gutter ensures that even in dense layouts, the luxury aesthetic is maintained through intentional whitespace (or "blackspace").

## Elevation & Depth

Depth is conveyed through **Tonal Layers and Backdrop Blurs** rather than traditional drop shadows. 

- **Level 0 (Base):** #0a0a0a.
- **Level 1 (Cards/Navigation):** #121212 with a 1px subtle border (#ffffff15).
- **Level 2 (Overlays/Modals):** A semi-transparent dark gray with a 20px backdrop blur (Glassmorphism).

To emphasize the premium nature, "Electric Cobalt" is occasionally used as a very soft, diffused outer glow (bloom effect) behind featured event cards or buttons to simulate a stage-lighting effect.

## Shapes

The shape language is **Pill-shaped (1rem)**. This generous rounding creates a highly modern, fluid, and approachable interface that contrasts beautifully against the deep, dark-mode backdrop. 

Larger containers, such as event hero images or modal windows, should utilize `rounded-lg` (2rem) to create a soft, containerized feel. Interactive elements like buttons and input fields stay consistent at the base 1rem to maintain a professional, high-end aesthetic.

## Components

### Buttons
Primary buttons feature a solid "Electric Cobalt" background with white text and a fully rounded pill-shaped form. Secondary buttons are "Ghost" style: a 1px border (#ffffff30) with no fill and matching pill roundedness. **Hover Effect:** The primary button should increase in brightness, while the ghost button should fill with a low-opacity white (10%) and sharpen its border contrast.

### Input Fields
Inputs are dark-themed with a #1a1a1a background and high roundedness (1rem). On focus, the bottom border transitions to the accent color.

### Cards
Event cards use the Level 1 surface color with 1rem rounded corners. They should have no visible shadow by default, but upon hover, the 1px border should brighten, and the image within should scale slightly (1.05x) for a cinematic feel.

### Chips/Tags
Used for event categories (e.g., "Live Production," "Virtual Gala"). These are small, pill-shaped elements with a subtle gray background and uppercase `label-caps` typography.

### Progress Indicators
For media playback or scroll progress, use a thin 2px "Electric Cobalt" line to provide high-visibility feedback without cluttering the UI.