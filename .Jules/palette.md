## 2026-03-27 - [Inline Form Errors]
**Learning:** Native browser alerts for validation are poor UX and lack accessibility. Users miss context and screen readers might not handle them well.
**Action:** Always replace `alert()` for form validation with conditionally rendered inline error messages containing `role="alert"` to provide better user experience and screen-reader accessibility.
