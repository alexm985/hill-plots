## 2024-05-18 - Avoid Native Alerts and Link Labels
**Learning:** Using native browser `alert()` for form validation creates a jarring user experience and can be problematic for screen readers. Additionally, unlinked labels and inputs reduce click targets and impair mobile accessibility.
**Action:** Use conditionally rendered inline error messages with `role="alert"` for validation feedback, and always ensure custom form components have their `id` and `htmlFor` attributes actively linked.
