
## 2024-05-18 - Replacing Native Alerts and Linking Form Labels
**Learning:** Native browser `alert()` popups disrupt user flow and are poorly handled by some screen readers. Additionally, unlinked form labels (`<label>` without `htmlFor` and `<input>` without `id`) degrade accessibility and prevent mobile users from easily clicking the label to focus the input.
**Action:** Replace native `alert()` calls with conditionally rendered inline error messages using `role="alert"`. Always link custom form component labels to their respective inputs using matching `htmlFor` and `id` attributes.
