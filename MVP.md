# RenderLab MVP

RenderLab is an Angular 21 pet project for studying browser rendering, CSS layout, Web APIs, JavaScript runtime behavior, and frontend performance through a real interface.

The product shape is an interactive frontend workbench: a canvas in the center, component palette on the left, inspector and metrics on the right, plus focused lab routes for layout, rendering, loading, and runtime experiments.

## Technical Direction

- Angular 21 standalone application.
- Signals for local UI state and derived state.
- Resource APIs for async lab data, presets, and benchmark fixtures.
- Modern Angular forms for inspector controls and experiment panels.
- Lazy routes for every lab section.
- Deferrable views for heavy demos and optional visualizers.
- Browser APIs used directly where the lesson is about the platform.
- CSS custom properties for runtime tokens and theming.
- SCSS introduced later for build-time tokens, maps, mixins, and generated utilities.

## MVP Surface

1. Workbench shell
   - Top navigation between lab sections.
   - Left component palette.
   - Center canvas.
   - Right inspector.
   - Metrics area for FPS, layout shifts, resource timing, and render notes.

2. Layout Lab
   - Flex vs Grid comparison.
   - Gap, alignment, wrapping, and intrinsic sizing experiments.
   - `@media` vs `@container` comparison.
   - CSS variables as live design tokens.
   - SCSS variables as build-time design tokens.

3. Rendering Lab
   - Critical Rendering Path visualization.
   - Style, layout, paint, composite stages.
   - Transform-based animation vs layout-triggering animation.
   - GPU compositing and `will-change` experiments.
   - FOIT/FOUT font loading experiments.
   - CSS Houdini paint worklet experiment.

4. Loading Lab
   - `async`, `defer`, and module script loading demos.
   - Angular `@defer` demos for heavy panels.
   - Image lazy loading.
   - Critical CSS and render-blocking CSS experiments.
   - Angular resource-based loading states.

5. Runtime Lab
   - Event delegation on the canvas.
   - `preventDefault`, `stopPropagation`, and propagation phases.
   - `Proxy` for observable state, undo/redo, validation, and debug logs.
   - Iterators and generators for tree traversal and replay.
   - Object shape stability, hidden classes, and inline caching experiments.

## Suggested Project Structure

```text
src/app
  core/
    shell/                 # App frame and global navigation
  features/
    workbench/             # Main canvas experience
    layout-lab/            # CSS layout experiments
    rendering-lab/         # Browser rendering and CSS performance experiments
    loading-lab/           # Resource loading and Angular defer experiments
    runtime-lab/           # DOM events and JavaScript runtime experiments
  shared/
    models/                # Shared types
    ui/                    # Reusable presentational UI
src/styles/
  design-tokens.css        # Runtime CSS custom properties
```

## Study Plan

### Stage 1: Angular 21 foundation

Goal: understand the project shell and modern Angular primitives before adding browser experiments.

- Set up lazy routes for lab sections.
- Use standalone components only.
- Use signals for navigation, selected panel, selected element, and inspector state.
- Add computed signals for derived UI state.
- Add effects only for browser-side integration points like measurements or persisted settings.
- Learn: standalone architecture, signals, computed state, effects, route-level code splitting.

Project milestone: shell, workbench layout, placeholder lab pages.

### Stage 2: CSS layout workbench

Goal: make the canvas useful enough to compare layout models.

- Add simple canvas elements: frame, card, text, image placeholder.
- Add layout modes: flex, grid, block.
- Build inspector controls with Angular forms.
- Bind inspector values to CSS custom properties and style objects.
- Compare flex one-axis layout with grid two-axis layout.
- Learn: flex formatting context, grid tracks, intrinsic sizing, alignment, gap, min/max constraints.

Project milestone: user can select a container and switch between flex and grid.

### Stage 3: Responsive and container-driven design

Goal: stop thinking only in viewport breakpoints.

- Add viewport presets for mobile, tablet, desktop.
- Add resizable containers inside the canvas.
- Implement equivalent demos with `@media` and `@container`.
- Use `ResizeObserver` to display measured container sizes.
- Learn: viewport queries, container queries, containment, responsive component design.

Project milestone: the same card adapts differently by viewport and by parent container.

### Stage 4: Design tokens and styling architecture

Goal: learn where SCSS variables and CSS variables each belong.

- Keep runtime theme values in CSS custom properties.
- Add SCSS partials for compile-time token maps and generated utility classes.
- Add theme presets controlled by signals.
- Inspect computed styles in the inspector panel.
- Learn: cascade, inheritance, runtime theming, build-time style generation, token boundaries.

Project milestone: live theme switching without rebuilding CSS.

### Stage 5: Browser rendering pipeline

Goal: connect UI choices to browser work.

- Add a Rendering Lab timeline: DOM, CSSOM, render tree, layout, paint, composite.
- Add demos that intentionally trigger layout, paint, and composite-only updates.
- Use Performance APIs where possible and DevTools manually for verification.
- Learn: Critical Rendering Path, style recalculation, layout, paint, compositing.

Project milestone: a demo panel shows why `transform` is cheaper than changing `top/left`.

### Stage 6: Loading strategy and perceived performance

Goal: understand how resources delay or improve first render.

- Add demos for blocking CSS and blocking scripts.
- Compare `async`, `defer`, and module scripts.
- Use Angular `@defer` for optional heavy panels.
- Use resource APIs for async presets, loading states, and errors.
- Add image lazy loading demos.
- Learn: CRP, render-blocking resources, script scheduling, lazy loading, Angular deferrable views.

Project milestone: Loading Lab can show the visible difference between eager and deferred panels.

### Stage 7: Fonts and visual stability

Goal: understand FOIT, FOUT, and layout stability.

- Add font strategy toggles.
- Compare `font-display` values.
- Track layout shifts when fonts swap.
- Add fallback font tuning notes.
- Learn: font loading, FOIT, FOUT, CLS, perceived performance.

Project milestone: user can trigger and observe font swap behavior.

### Stage 8: Overlay and native HTML APIs

Goal: use native platform primitives instead of rebuilding every overlay.

- Add command palette with `<dialog>`.
- Add property popovers with the `popover` attribute.
- Add context menu behavior on canvas elements.
- Learn: focus management, top layer, modal vs non-modal UI, native dismissal behavior.

Project milestone: inspector overlays use native browser APIs.

### Stage 9: Event system and interaction model

Goal: build canvas interaction in a scalable way.

- Implement selection, drag, resize, and context menu through event delegation.
- Add visual debug panel for event target, current target, phase, and default prevention.
- Create examples for `preventDefault` and `stopPropagation`.
- Learn: bubbling, capturing, composed paths, default actions, pointer events.

Project milestone: canvas interactions work without attaching handlers to every element.

### Stage 10: JavaScript runtime models

Goal: learn language features by making them useful in the app.

- Use `Proxy` for state debugging, validation, and change recording.
- Add undo/redo command history.
- Use iterators and generators to traverse the element tree.
- Add replay mode that yields one operation at a time.
- Learn: Proxy traps, iterable protocol, generator control flow, immutable vs mutable state tradeoffs.

Project milestone: user can replay layout changes step by step.

### Stage 11: JavaScript engine performance

Goal: understand why object shape stability matters.

- Create benchmark fixtures with stable and unstable object shapes.
- Compare property access patterns.
- Add notes for hidden classes, inline caching, and deoptimization triggers.
- Keep benchmarks educational, not as absolute truth.
- Learn: hidden classes/shapes, inline caches, monomorphic vs polymorphic access.

Project milestone: Runtime Lab explains object access performance with visible examples.

### Stage 12: CSS Houdini and advanced rendering

Goal: experiment with extending CSS itself.

- Add a paint worklet for the canvas grid or debug overlay.
- Compare Houdini output with regular CSS backgrounds.
- Learn: paint worklets, typed custom properties, browser support boundaries.

Project milestone: canvas grid can be rendered by CSS Houdini as an optional experiment.

## Definition Of Done For MVP

- The app has a stable shell and lazy-routed lab sections.
- The workbench has visible palette, canvas, inspector, and metrics areas.
- Each lab section contains at least one interactive experiment.
- All major listed study topics are represented by either a feature, a demo, or a documented future task.
- Angular 21 primitives are used intentionally, not just because they are new.
- Browser APIs are used directly where the purpose is to understand the browser.
