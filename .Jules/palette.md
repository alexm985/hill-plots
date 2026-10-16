## 2024-03-20 - Inline Validation over Alerts
**Learning:** Native `alert()` calls for form validation disrupt user flow and provide poor accessibility. Users lose context and screen readers cannot properly associate the error with the problematic field. Additionally, isolated input fields lacking `id` and `htmlFor` pairings fail click-to-focus on mobile devices.
**Action:** Always replace native alerts with visually adjacent, inline error messages using `role="alert"` and semantic styling. Ensure all custom form elements explicitly bind `<label htmlFor="id">` to `<input id="id">`.
