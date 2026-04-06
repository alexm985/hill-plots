## 2025-05-18 - Improve Form Accessibility and Validation in Area Calculator
**Learning:** Native `alert()` calls for form validation disrupt the user experience by blocking the thread and lack proper screen reader support. Furthermore, input fields without linked labels (`htmlFor` and `id`) hinder mobile tapability and accessibility.
**Action:** Replace `alert()` with an inline error message utilizing `role="alert"`. Ensure all `<label>` tags correctly use `htmlFor` matching the associated `<input>`'s `id`.
