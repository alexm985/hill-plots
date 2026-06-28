## 2024-06-28 - Area Calculator Form Validation
**Learning:** Native `alert()` calls for form validation disrupt user experience and screen readers. Unlinked labels and inputs reduce accessibility and mobile click-to-focus behavior.
**Action:** Always use conditionally rendered inline error messages with `role="alert"` and ensure custom form components have their `id` and `htmlFor` attributes actively linked.
