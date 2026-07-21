## 2023-10-27 - Area Calculator Inline Validation & Accessibility
**Learning:** Native `alert()` in form validation provides a poor, jarring user experience and creates accessibility issues for screen readers since focus is lost abruptly. Additionally, isolated input fields missing IDs break label clicking for mobile/touch users.
**Action:** Always prefer conditionally rendered inline error components (with `role="alert"`) over native browser alerts. Always connect labels to inputs using `htmlFor` and `id` tags. Add focus indicators (`focus-visible`) to inputs and buttons.
