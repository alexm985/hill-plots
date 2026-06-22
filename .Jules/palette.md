## 2024-05-18 - Replacing Native Browser Alerts with Accessible Inline Alerts and Linking Form Labels

**Learning:** When attempting to improve the UX around form validation or calculation errors, relying on native browser `alert()` popups is jarring, inaccessible to screen readers, and breaks the application flow. Additionally, floating labels without linked IDs make click-to-focus behavior on mobile devices extremely frustrating and fail accessibility checks.
**Action:** Replace `alert()` calls with state-managed UI error components using `role="alert"`. Always connect custom form components` `id` and `htmlFor` attributes to ensure correct mobile interaction and accessible forms.
