## 2024-05-24 - Form Validation & Accessibility Improvements
**Learning:** Native `alert()` dialogs break user flow and are not accessible. Form fields must have `id` and `htmlFor` linkages to support screen readers and click-to-focus functionality on mobile devices.
**Action:** Always replace native `alert()` validation with conditionally rendered inline error components featuring `role="alert"`. Consistently verify that custom form elements actively link `<label>` and `<input>` using matching `htmlFor` and `id` properties.
