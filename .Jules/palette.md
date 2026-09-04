## 2025-03-10 - Replace native alert with inline validation and link form inputs

**Learning:** Replacing native browser `alert()` with conditionally rendered inline error messages (`role="alert"`) improves both the user experience by not blocking the UI and screen-reader accessibility by announcing errors appropriately. Additionally, ensuring all custom form elements have linked `id` and `htmlFor` attributes is crucial for proper keyboard navigation and click-to-focus behavior.

**Action:** Whenever building or modifying custom forms, always implement inline validation with `role="alert"` for errors and ensure that every `<label>` correctly points to its associated input via matching `htmlFor` and `id` attributes.