## 2024-10-18 - Replacing Native Alerts with Semantic Inline Validation

**Learning:** Replacing native browser `alert()` popups with conditionally rendered UI elements mapped with `role="alert"` drastically improves user experience. In React, linking an explicit `error` state that automatically clears `onChange` when the user begins to correct their input provides seamless continuous feedback, unlike halting native modals.

**Action:** Always avoid `alert()` in forms. Implement inline `<div role="alert">` elements combined with linked `htmlFor`/`id` labels to ensure both visual clarity and screen-reader accessibility for validation errors.
