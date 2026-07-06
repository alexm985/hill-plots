
## 2024-07-06 - Replacing Native Alert with Inline Validation in AreaCalculator
**Learning:** Native `alert()` dialogs in custom React calculator tools disrupt user flow and are not announced consistently as form errors by screen readers. Furthermore, React form inputs lacking `id` and `htmlFor` pairings fail to support click-to-focus behavior, harming accessibility and mobile UX.
**Action:** Always replace blocking native dialogs with inline, state-driven validation using `role="alert"` styled with Tailwind utility classes. Ensure every `<label>` has a matching `<input id="...">` to support semantic accessibility and increased hit area.
