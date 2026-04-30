## 2026-04-30 - Inline Form Errors over Native Alerts
**Learning:** Native `alert()` for form validation disrupts UX and screen readers. Replacing it with conditionally rendered inline error messages using `role="alert"` and linking inputs properly with `htmlFor` and `id` significantly improves form usability and accessibility in AreaCalculator.
**Action:** Always prefer inline error components tied properly to form validation state instead of browser alerts. Keep ensuring that input and label bindings are configured manually.
