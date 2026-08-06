## 2023-10-27 - Inline Validation for Forms
**Learning:** Native `alert()` modals are disruptive to the user experience and not always accessible to screen readers. Using conditionally rendered inline error messages with `role="alert"` provides immediate, contextual feedback that is screen-reader friendly without blocking the user interface.
**Action:** Always prefer inline error messages linked to their context over native browser alerts for form validation. Ensure forms have clearly linked labels using `htmlFor` and `id`.
