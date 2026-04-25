# RenderLab MVP

RenderLab - это pet-проект на Angular 21 для изучения браузерного рендеринга, CSS layout, Web APIs, поведения JavaScript runtime и frontend performance через реальный интерфейс.

Форма продукта - интерактивный frontend workbench: canvas в центре, палитра компонентов слева, inspector и метрики справа, плюс отдельные lab-разделы для экспериментов с layout, rendering, loading и runtime.

## Техническое направление

- Standalone-приложение на Angular 21.
- Signals для локального UI-состояния и производного состояния.
- Resource APIs для асинхронных данных лабораторий, пресетов и benchmark fixtures.
- Современные Angular forms для контролов inspector и панелей экспериментов.
- Lazy routes для каждого lab-раздела.
- Deferrable views для тяжелых demos и дополнительных визуализаторов.
- Browser APIs используются напрямую там, где цель - изучить платформу.
- CSS custom properties для runtime-токенов и темизации.
- SCSS добавляется позже для build-time токенов, maps, mixins и сгенерированных utilities.

## Поверхность MVP

1. Workbench shell
   - Верхняя навигация между lab-разделами.
   - Левая палитра компонентов.
   - Центральный canvas.
   - Правый inspector.
   - Область метрик для FPS, layout shifts, resource timing и заметок по рендерингу.

2. Layout Lab
   - Сравнение Flex и Grid.
   - Эксперименты с gap, alignment, wrapping и intrinsic sizing.
   - Сравнение `@media` и `@container`.
   - CSS variables как live design tokens.
   - SCSS variables как build-time design tokens.

3. Rendering Lab
   - Визуализация Critical Rendering Path.
   - Стадии style, layout, paint, composite.
   - Анимация через transform против анимации, которая триггерит layout.
   - Эксперименты с GPU compositing и `will-change`.
   - Эксперименты с загрузкой шрифтов FOIT/FOUT.
   - Эксперимент с CSS Houdini paint worklet.

4. Loading Lab
   - Demos загрузки scripts через `async`, `defer` и module scripts.
   - Angular `@defer` demos для тяжелых панелей.
   - Lazy loading изображений.
   - Эксперименты с Critical CSS и render-blocking CSS.
   - Loading states на основе Angular resources.

5. Runtime Lab
   - Делегирование событий на canvas.
   - `preventDefault`, `stopPropagation` и фазы распространения событий.
   - `Proxy` для observable state, undo/redo, validation и debug logs.
   - Iterators и generators для обхода дерева и replay.
   - Эксперименты со стабильностью object shapes, hidden classes и inline caching.

## Предлагаемая структура проекта

```text
src/app
  core/
    shell/                 # Каркас приложения и глобальная навигация
  features/
    workbench/             # Основной canvas experience
    layout-lab/            # Эксперименты с CSS layout
    rendering-lab/         # Эксперименты с browser rendering и CSS performance
    loading-lab/           # Эксперименты с resource loading и Angular defer
    runtime-lab/           # Эксперименты с DOM events и JavaScript runtime
  shared/
    models/                # Общие типы
    ui/                    # Переиспользуемый presentational UI
src/styles/
  design-tokens.css        # Runtime CSS custom properties
```

## План изучения

### Этап 1: Основа Angular 21

Цель: понять shell проекта и современные Angular primitives до добавления браузерных экспериментов.

- Настроить lazy routes для lab-разделов.
- Использовать только standalone components.
- Использовать signals для навигации, выбранной панели, выбранного элемента и состояния inspector.
- Добавить computed signals для производного UI-состояния.
- Добавлять effects только для browser-side integration points: measurements или persisted settings.
- Изучить: standalone architecture, signals, computed state, effects, route-level code splitting.

Project milestone: shell, workbench layout, placeholder lab pages.

### Этап 2: CSS layout workbench

Цель: сделать canvas достаточно полезным, чтобы сравнивать layout-модели.

- Добавить простые canvas-элементы: frame, card, text, image placeholder.
- Добавить layout modes: flex, grid, block.
- Собрать inspector controls через Angular forms.
- Связать значения inspector с CSS custom properties и style objects.
- Сравнить flex как one-axis layout с grid как two-axis layout.
- Изучить: flex formatting context, grid tracks, intrinsic sizing, alignment, gap, min/max constraints.

Project milestone: пользователь может выбрать container и переключить его между flex и grid.

### Этап 3: Responsive и container-driven design

Цель: перестать думать только viewport breakpoints.

- Добавить viewport presets для mobile, tablet, desktop.
- Добавить resizable containers внутри canvas.
- Реализовать одинаковые demos через `@media` и `@container`.
- Использовать `ResizeObserver`, чтобы показывать измеренные размеры container.
- Изучить: viewport queries, container queries, containment, responsive component design.

Project milestone: одна и та же card адаптируется по-разному от viewport и от parent container.

### Этап 4: Design tokens и styling architecture

Цель: понять, где нужны SCSS variables, а где CSS variables.

- Хранить runtime theme values в CSS custom properties.
- Добавить SCSS partials для compile-time token maps и сгенерированных utility classes.
- Добавить theme presets, управляемые signals.
- Инспектировать computed styles в inspector panel.
- Изучить: cascade, inheritance, runtime theming, build-time style generation, token boundaries.

Project milestone: live theme switching работает без rebuild CSS.

### Этап 5: Browser rendering pipeline

Цель: связать UI-решения с работой браузера.

- Добавить timeline в Rendering Lab: DOM, CSSOM, render tree, layout, paint, composite.
- Добавить demos, которые намеренно триггерят layout, paint и composite-only updates.
- Использовать Performance APIs там, где возможно, и DevTools вручную для проверки.
- Изучить: Critical Rendering Path, style recalculation, layout, paint, compositing.

Project milestone: demo panel показывает, почему `transform` дешевле изменения `top/left`.

### Этап 6: Loading strategy и perceived performance

Цель: понять, как ресурсы задерживают или улучшают first render.

- Добавить demos для blocking CSS и blocking scripts.
- Сравнить `async`, `defer` и module scripts.
- Использовать Angular `@defer` для опциональных тяжелых панелей.
- Использовать resource APIs для async presets, loading states и errors.
- Добавить demos lazy loading изображений.
- Изучить: CRP, render-blocking resources, script scheduling, lazy loading, Angular deferrable views.

Project milestone: Loading Lab показывает видимую разницу между eager и deferred panels.

### Этап 7: Шрифты и visual stability

Цель: понять FOIT, FOUT и layout stability.

- Добавить переключатели font strategy.
- Сравнить значения `font-display`.
- Отслеживать layout shifts при font swap.
- Добавить заметки по настройке fallback font.
- Изучить: font loading, FOIT, FOUT, CLS, perceived performance.

Project milestone: пользователь может вызвать и наблюдать поведение font swap.

### Этап 8: Overlay и native HTML APIs

Цель: использовать native platform primitives вместо пересборки каждого overlay с нуля.

- Добавить command palette через `<dialog>`.
- Добавить property popovers через атрибут `popover`.
- Добавить context menu behavior для canvas elements.
- Изучить: focus management, top layer, modal vs non-modal UI, native dismissal behavior.

Project milestone: inspector overlays используют native browser APIs.

### Этап 9: Event system и interaction model

Цель: построить canvas interaction масштабируемым способом.

- Реализовать selection, drag, resize и context menu через event delegation.
- Добавить visual debug panel для event target, current target, phase и default prevention.
- Создать примеры для `preventDefault` и `stopPropagation`.
- Изучить: bubbling, capturing, composed paths, default actions, pointer events.

Project milestone: canvas interactions работают без навешивания handlers на каждый element.

### Этап 10: JavaScript runtime models

Цель: изучить language features, применяя их с пользой в приложении.

- Использовать `Proxy` для state debugging, validation и change recording.
- Добавить undo/redo command history.
- Использовать iterators и generators для обхода element tree.
- Добавить replay mode, который выдает одну operation за раз.
- Изучить: Proxy traps, iterable protocol, generator control flow, immutable vs mutable state tradeoffs.

Project milestone: пользователь может replay layout changes step by step.

### Этап 11: JavaScript engine performance

Цель: понять, почему стабильность object shape важна.

- Создать benchmark fixtures со stable и unstable object shapes.
- Сравнить property access patterns.
- Добавить заметки про hidden classes, inline caching и deoptimization triggers.
- Держать benchmarks образовательными, а не абсолютной истиной.
- Изучить: hidden classes/shapes, inline caches, monomorphic vs polymorphic access.

Project milestone: Runtime Lab объясняет object access performance через видимые examples.

### Этап 12: CSS Houdini и advanced rendering

Цель: поэкспериментировать с расширением самого CSS.

- Добавить paint worklet для canvas grid или debug overlay.
- Сравнить Houdini output с обычными CSS backgrounds.
- Изучить: paint worklets, typed custom properties, browser support boundaries.

Project milestone: canvas grid может рендериться через CSS Houdini как опциональный experiment.

## Definition Of Done для MVP

- У приложения есть стабильный shell и lazy-routed lab sections.
- В workbench видны palette, canvas, inspector и metrics areas.
- В каждом lab-разделе есть хотя бы один interactive experiment.
- Все основные темы из списка представлены feature, demo или задокументированной future task.
- Angular 21 primitives используются осознанно, а не просто потому что они новые.
- Browser APIs используются напрямую там, где цель - понять браузер.
