## 2024-05-14 - Replace native alert with inline error and link labels
**Learning:** Native `alert()` modals are disruptive to the user experience and break focus management for screen readers. Form fields must have associated labels for click-to-focus and screen reader accessibility.
**Action:** Always use conditionally rendered inline error messages with `role="alert"` instead of native `alert()`. Ensure custom form components explicitly link their `label` elements and `input` elements using matching `htmlFor` and `id` attributes.
