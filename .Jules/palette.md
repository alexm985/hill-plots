## 2025-01-20 - Inline Form Validation and Label Linking
 **Learning:** Using native browser alerts for form validation creates a disruptive user experience and lacks necessary accessibility context. Additionally, inputs must be linked to their labels (`id` + `htmlFor`) to ensure screen readers can announce them correctly and to allow mobile users to focus inputs by tapping the label text.
 **Action:** Always use inline error messages with `role="alert"` instead of `alert()`, and systematically ensure all form inputs have unique IDs linked properly to their label's `htmlFor` attribute.
