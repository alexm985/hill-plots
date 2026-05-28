## 2024-05-18 - Replacing Native Browser Alerts with Inline UI Error Messages
**Learning:** Native `alert()` calls for form validation are jarring and screen-reader unfriendly. Replacing them with conditionally rendered inline error components (with `role="alert"`) vastly improves UX, keeping the user in the context of the form.
**Action:** Always scan for `alert()` calls used in validation logic within interactive components, and convert them to inline state-driven error messages with proper ARIA attributes to ensure seamless integration and accessibility.
