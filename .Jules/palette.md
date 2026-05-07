## 2024-05-14 - Accessible Form Validations in Area Calculator
**Learning:** Native `alert()` calls are disruptive and inaccessible to screen readers in context of form validations. Missing `id`/`htmlFor` couplings on custom form components break mobile click-to-focus and screen reader context.
**Action:** Always use conditional inline error messages with `role="alert"` for form validation. Always explicitly link labels to inputs using matching `id` and `htmlFor` attributes, even on simple unmanaged inputs.
