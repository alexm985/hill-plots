## 2024-05-18 - Replaced Native Alerts in Forms
**Learning:** Using native `alert()` for form validation is disruptive to UX and lacks proper accessibility for screen readers. It breaks the flow of the application.
**Action:** Replace `alert()` with conditionally rendered inline error messages using `role="alert"` and semantic HTML/CSS to provide immediate, context-aware, and accessible feedback directly where the user is interacting.
