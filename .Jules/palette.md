
## 2025-03-01 - Avoid native alert() for inline validation
**Learning:** Native `alert()` calls for form validation disrupt user flow and screen reader focus, and violate standard a11y practices. Replaced it with conditional inline text with `role="alert"`.
**Action:** Consistently replace `alert()` with a React state-driven error message bound to input fields via `aria-invalid` and a dedicated error container below or near the form controls.
