## 2024-05-19 - Replace Blocking Browser Alerts with Accessible Inline Errors
**Learning:** Native `alert()` dialogs in forms block the main thread and break the visual flow of the UI. They are also poorly announced by some screen readers without context.
**Action:** Replace `alert()` validations with conditionally rendered inline error components featuring `role="alert"` and semantic styling (e.g., Tailwind's text-red-500) to ensure accessible, non-blocking feedback.
