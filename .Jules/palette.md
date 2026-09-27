## 2023-10-27 - Inline Validation for Area Calculator
**Learning:** The calculator was relying on a blocking, non-accessible browser `alert()` which disrupts UX and screen readers. Additionally, inputs were missing explicit `htmlFor` and `id` linking, making mobile tap targets and screen reader navigation difficult.
**Action:** Replaced `alert()` with an accessible inline error message (`role="alert"`) and ensured all custom form components have actively linked `id` and `htmlFor` attributes for proper accessibility.
