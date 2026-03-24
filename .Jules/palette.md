## 2024-05-18 - Improve Form Validation and Accessibility
**Learning:** Using native browser alerts (`alert()`) for form validation provides a poor user experience, especially on mobile devices. Furthermore, inputs without associated `htmlFor` and `id` attributes degrade accessibility and prevent click-to-focus behavior.
**Action:** Always use inline error messages (e.g., conditionally rendered elements with `role="alert"`) for form validation feedback. Ensure all form labels have an `htmlFor` attribute that strictly matches their input's `id` attribute.
