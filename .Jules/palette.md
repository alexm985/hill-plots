## 2024-05-15 - Area Calculator Form Validation
**Learning:** Native browser alerts for form validation provide a jarring user experience and break the flow. Additionally, form inputs lacking proper `id` and `htmlFor` associations create accessibility barriers for screen readers and reduce the clickable area for mobile users.
**Action:** Always prefer conditionally rendered inline error messages with `role="alert"` for form validation. Always associate `<label>` and `<input>` elements using `id` and `htmlFor` attributes to ensure robust accessibility and improved mobile usability.
