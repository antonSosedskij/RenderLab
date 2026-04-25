# Learnings

Личная база выводов, к которым прихожу во время разработки RenderLab.

## TypeScript

### `as const` objects вместо `enum` для UI-state значений

**Вывод**

Для наборов значений внутри UI-состояния часто выгоднее использовать `as const` objects и union types вместо TypeScript `enum`.

**Почему**

- `as const` object проще контролировать как обычный JavaScript object.
- Literal union types хорошо работают с Angular templates, signals и typed state.
- Такой подход обычно дает меньше лишнего runtime-кода, чем обычный `enum`.
- Значения легче использовать как строки для CSS classes, атрибутов, query params или serialized state.
- Tree-shaking и minification обычно предсказуемее, потому что нет специальной enum-обертки от TypeScript.

**Когда применять**

- UI modes: layout mode, theme mode, panel state, selected tab.
- Значения, которые нужны как строки в template/CSS/API.
- Небольшие наборы констант, которые должны участвовать в type inference.
- Состояние на signals, где важно сохранить точные literal types.

**Когда быть осторожным**

- Если в проекте уже принят `enum` как командный стандарт.
- Если нужен runtime namespace с перечислением значений.
- Если работа идет с внешним API или generated types, где уже используется `enum`.
- Если сравнение bundle output не подтверждает выгоду в конкретном случае.

**Как проверить**

- Сравнить compiled JavaScript для `enum`, `const enum` и `as const` object.
- Проверить production bundle после minification.
- Убедиться, что значения удобно использовать в Angular template и CSS class bindings.

**Связь с RenderLab**

Подходит для будущих значений вроде layout mode: `block`, `flex`, `grid`; panel state; viewport presets; experiment status.
