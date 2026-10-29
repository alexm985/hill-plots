## 2024-10-29 - Inline Errors and Linked Labels
**Learning:** Users often encounter native browser alerts when validating forms in this app (like in the AreaCalculator), which are poor for a11y and jarring. Inputs also lacked linked labels (`htmlFor`/`id`), preventing click-to-focus on mobile and screen-reader association.
**Action:** Replace `alert()` with conditional inline errors using `role="alert"` for better UX and screen reader support. Always link custom form labels to inputs using `htmlFor` and `id` attributes.
