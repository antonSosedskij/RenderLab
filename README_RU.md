# RenderLab

RenderLab - это pet-проект на Angular 21 для практического изучения внутренней кухни frontend-платформы через реальный интерфейс.

Приложение строится как интерактивная рабочая среда: canvas в центре, controls в inspector, а также отдельные lab-разделы для CSS layout, browser rendering, loading strategy и JavaScript runtime.

## Цели

- Изучить CSS layout на практических экспериментах с `block`, `flex` и `grid`.
- Связать inspector controls с реальным поведением браузерного layout.
- Разобрать rendering topics: CRP, paint, compositing, GPU-friendly CSS, FOIT/FOUT и CSS Houdini.
- Практиковать Angular 21 primitives: standalone components, signals, model inputs, computed state, lazy routes, resources, forms и deferrable views.
- Оставлять browser-platform experiments близко к native HTML/CSS/DOM, не пряча изучаемое поведение внутри UI libraries.

## Текущий Фокус

Сейчас проект находится на этапе Workbench layout.

Реализовано:

- App shell с lazy-routed sections.
- Workbench page с component rail, canvas, inspector и metrics area.
- Demo frame с layout cards.
- Display mode control: `block`, `flex`, `grid`.
- Gap control.
- Flex controls для:
  - `flex-direction`
  - `flex-wrap`
  - `justify-content`
  - `align-items`

Дальше:

- Grid controls.
- Более явные learning checkpoints.
- Rendering и Loading labs.

## Архитектурные Заметки

- В приложении используются Angular standalone components.
- Workbench frame layout описан через discriminated union state.
- Inspector controls оборачивают PrimeNG components, чтобы PrimeNG-specific binding logic не протекала в page components.
- Canvas/frame experiments остаются на чистых HTML/CSS/Angular bindings.
- Runtime design tokens живут в CSS custom properties.

## Разработка

Установить зависимости:

```bash
npm install
```

Запустить dev server:

```bash
npm start
```

Открыть:

```text
http://localhost:4200/
```

Отформатировать проект:

```bash
npm run format
```

Проверить форматирование:

```bash
npm run format:check
```

Собрать проект:

```bash
npm run build
```

## Процесс Обучения

RenderLab разрабатывается как учебный инженерный проект, а не просто как список фич.

После каждого завершенного этапа реализация ревьюится, а разработчик объясняет ключевые идеи перед переходом дальше. Это помогает не просто “собрать интерфейс”, а действительно понять Angular state, CSS layout и браузерное поведение.

## Разработка С Использованием AI

Проект разрабатывается с AI-помощью, но это не приложение, полностью сгенерированное по промптам.

Разработчик отвечает за реализацию, решения и понимание материала. AI используется как:

- ревьюер кода, архитектуры и UI-решений;
- наставник по frontend platform concepts;
- помощник в декомпозиции проекта на этапы изучения;
- источник обратной связи по trade-offs и пробелам в понимании;
- помощник для небольших инфраструктурных или рефакторинговых задач, когда это явно запрошено.

Рабочее правило проекта: после каждого feature stage реализация проверяется, а разработчик должен объяснить, что происходит под капотом, прежде чем двигаться дальше. Цель - развивать не только проект, но и инженерное понимание, которое за ним стоит.
