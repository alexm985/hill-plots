## 2026-04-09 - Area Calculator Validation
**Learning:** Replaced native `alert()` with conditionally rendered inline error messages using `role="alert"` and linked labels using `htmlFor` in `AreaCalculator.tsx`. This greatly improves the UX by preventing jarring popups and enhances accessibility for screen readers and mobile touch targets.
**Action:** Always prefer inline error messages linked to form states over browser alerts for validation feedback, and ensure custom form inputs have their `id` and `htmlFor` attributes actively linked.
