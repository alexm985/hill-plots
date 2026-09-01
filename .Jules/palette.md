## 2026-09-01 - Accessible Inline Errors and Form Linking
**Learning:** Native browser alerts for form validation create poor UX, especially for screen readers, and unlinked labels hinder mobile interaction and accessibility.
**Action:** Always use conditionally rendered inline error messages with `role="alert"` and ensure all custom form inputs have their `id` strictly linked to their label's `htmlFor` attribute.
