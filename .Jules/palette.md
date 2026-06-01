## 2024-06-01 - Replace native alert with inline validation and fix form a11y
**Learning:** Native `alert()` dialogs in React applications break the user flow and are poorly handled by screen readers. Form inputs missing `id` bindings to their `label`'s `htmlFor` fail mobile click-to-focus and screen reader context.
**Action:** Always replace `alert()` with conditionally rendered inline error messages using `role="alert"`. Consistently pair `<label htmlFor="x">` with `<input id="x">` and apply `focus-visible` styles for better keyboard navigation visibility.
