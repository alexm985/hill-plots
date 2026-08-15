## 2026-08-15 - Inline Form Errors & Accessible Labels
**Learning:** Native browser alerts for form validation disrupt user flow and offer poor accessibility. Furthermore, unlinked labels in custom form inputs impede screen readers and mobile click-to-focus behavior.
**Action:** Replace `alert()` calls with inline React state errors rendered conditionally with `role="alert"`. Always link `<label>` elements to their corresponding inputs using explicitly matched `htmlFor` and `id` attributes.
