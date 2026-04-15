## 2024-05-18 - Replacing Native Alerts with Accessible Inline Validation
**Learning:** Using native `alert()` for form validation creates a poor user experience and is inaccessible to screen readers because it abruptly interrupts the user flow and loses context.
**Action:** Always replace native browser alerts with conditionally rendered inline error messages using `role="alert"` near the form fields, ensuring they are visually distinct and readable for assistive technologies.
