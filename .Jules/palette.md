## 2024-05-18 - Replace Native Alerts with Inline Role Alert
**Learning:** Using native browser `alert()` for form validation is disruptive and poorly supported by screen readers because focus is forcefully shifted and visual context is lost. Users prefer localized, non-blocking feedback.
**Action:** Always replace native `alert()` calls with conditionally rendered inline error messages using `role="alert"` placed near the relevant form inputs. Ensure inputs are properly associated with labels using `id` and `htmlFor` for maximum accessibility.
