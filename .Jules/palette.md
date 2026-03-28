
## 2024-03-28 - Replaced native alert() with inline error message in AreaCalculator
**Learning:** The native browser `alert()` is highly disruptive to user flow and provides poor context for screen readers when handling form validation errors.
**Action:** When validating form inputs, utilize conditionally rendered inline elements with `role="alert"` placed near the relevant fields to provide clear, accessible, and non-blocking feedback. Also, ensure all form inputs have linked `id` and `htmlFor` attributes for proper focus targeting.
