
## 2024-05-24 - Area Calculator Form Accessibility
**Learning:** Native `alert()` dialogs for form validation break user flow and are poorly handled by screen readers. Form inputs without `id` and `htmlFor` bindings fail click-to-focus and screen reader context.
**Action:** Replaced `alert()` with an inline error element using `role="alert"` that clears instantly on user correction (`onChange`). Explicitly bound all `<label>`s to `<input>`s via `htmlFor` and `id` for full keyboard and semantic accessibility.
