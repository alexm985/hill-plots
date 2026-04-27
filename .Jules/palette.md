## 2025-04-27 - Inline Accessible Error Messages
**Learning:** Native `alert()` dialogs severely disrupt the user experience and are not well-supported by screen readers, particularly in calculators and multi-input forms.
**Action:** Always replace native browser `alert()` usage with inline error messages styled with `role="alert"` (e.g., using existing tailwind utility classes) and appropriately connected inputs (via `id` and `htmlFor`) to ensure immediate, non-blocking, accessible feedback.
