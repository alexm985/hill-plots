## 2026-09-10 - Inline Validation Errors
**Learning:** Native browser alerts are disruptive, have poor accessibility (often not read correctly by screen readers in context), and break the visual flow of a modern UI.
**Action:** Always replace native `alert()` in forms with inline error messages using `role="alert"` and ensure inputs are properly linked to labels using `id` and `htmlFor`.
