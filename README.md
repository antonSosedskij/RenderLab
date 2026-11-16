# RenderLab

RenderLab is an Angular 21 pet project for studying frontend platform internals through a real interface.

The app is built as an interactive workbench: a canvas in the center, controls in the inspector, and focused lab sections for CSS layout, browser rendering, loading strategy, and JavaScript runtime behavior.

## Goals

- Study CSS layout with practical `block`, `flex`, and `grid` experiments.
- Connect inspector controls to real browser layout behavior.
- Explore rendering topics such as CRP, paint, compositing, GPU-friendly CSS, FOIT/FOUT, and CSS Houdini.
- Practice Angular 21 primitives: standalone components, signals, model inputs, computed state, lazy routes, resources, forms, and deferrable views.
- Keep browser-platform experiments close to native HTML/CSS/DOM instead of hiding them inside UI libraries.

## Current Focus

The project is currently in the Workbench layout phase.

Implemented:

- App shell with lazy-routed sections.
- Workbench page with component rail, canvas, inspector, and metrics area.
- Demo frame with layout cards.
- Display mode control: `block`, `flex`, `grid`.
- Gap control.
- Flex controls for:
  - `flex-direction`
  - `flex-wrap`
  - `justify-content`
  - `align-items`

Next:

- Grid controls.
- More explicit layout learning checkpoints.
- Rendering and loading labs.

## Architecture Notes

- Angular standalone components are used across the app.
- Workbench frame layout is modeled as a discriminated union state.
- Inspector controls are wrapped around PrimeNG components so PrimeNG-specific binding logic does not leak into page components.
- The canvas/frame experiments remain plain HTML/CSS/Angular bindings.
- Runtime design tokens live in CSS custom properties.

## Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm start
```

Open:

```text
http://localhost:4200/
```

Format the project:

```bash
npm run format
```

Check formatting:

```bash
npm run format:check
```

Build:

```bash
npm run build
```

## Learning Workflow

RenderLab is developed as a learning project, not just a feature checklist.

After every completed study step, the implementation is reviewed and the developer must explain the concepts before moving forward. This keeps the project connected to the underlying browser and Angular mental models.

## AI-Assisted Development

This project is developed with AI assistance, but not as a prompt-only generated app.

The developer owns the implementation, decisions, and learning process. AI is used as:

- a reviewer for code, architecture, and UI decisions;
- a mentor for frontend platform concepts;
- a planning partner for breaking the project into study stages;
- a source of feedback on trade-offs and missing understanding;
- a helper for small infrastructure or refactoring tasks when explicitly requested.

The working rule is intentional: after each feature stage, the implementation is reviewed and the developer must explain the underlying concepts before moving on. The goal is to build both the project and the engineering understanding behind it.
