## 2024-05-12 - Inline Validation over Native Alert
**Learning:** Native browser `alert()` for form validation breaks user flow, traps screen readers, and feels unpolished. Additionally, standalone inputs without linked `htmlFor`/`id` labels fail screen reader accessibility and prevent click-to-focus on mobile.
**Action:** Always replace `alert()` with conditionally rendered, inline error messages using `role="alert"` and ensure custom form components have actively linked `id` and `htmlFor` attributes.
