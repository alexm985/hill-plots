## 2025-03-01 - Replaced native alert with inline validation
**Learning:** Native `alert()` modals for form validation disrupt the user flow and provide poor screen-reader accessibility, leading to a jarring UX in interactive components like the Area Calculator.
**Action:** Replaced native alerts with inline error states using `role="alert"` and semantic HTML (`id` + `htmlFor`) to improve form context and maintain context for keyboard/screen reader users.
