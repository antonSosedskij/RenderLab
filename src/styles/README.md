# Styles

Global design tokens start in `design-tokens.css` as runtime CSS custom properties.

When the project needs build-time composition, add SCSS partials here and keep the distinction explicit:

- SCSS variables: compile-time constants, maps, mixins, utility generation.
- CSS custom properties: runtime theming, responsive values, inspected canvas state.
