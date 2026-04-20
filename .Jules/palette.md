## 2024-11-02 - Replace Native Alerts with Inline ARIA Alerts
**Learning:** Native `alert()` calls for form or input validations disrupt the user flow, block interaction, and provide a poor experience for screen reader users compared to an explicitly defined `role="alert"`.
**Action:** When working on validation errors, replace native `alert()`s with an inline element that uses `role="alert"` (e.g. `<div role="alert">...</div>`) to ensure errors are read to assistive technologies without stopping user interactions.
