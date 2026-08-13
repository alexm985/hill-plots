## 2025-03-08 - Accessible Form Validation
**Learning:** Native browser alert() creates a disruptive user experience and poor screen reader compatibility for form validation in React apps. Using conditionally rendered inline error messages with `role="alert"` provides better context and accessibility without blocking the main thread.
**Action:** Replace native alerts with inline error states using `role="alert"` and distinct semantic styling for all form validation handling.
