## 2024-10-25 - Inline Form Validation and Label Accessibility
**Learning:** Using native browser `alert()` for form validation creates a disruptive experience and is inaccessible for screen readers. Inputs without explicit `id` and `htmlFor` label associations prevent click-to-focus on mobile and hinder screen reader usage.
**Action:** Always use conditionally rendered inline error messages with `role="alert"` for form validation. Always ensure custom form components have their `id` and `htmlFor` attributes actively linked for proper accessibility and mobile click-to-focus behavior.
