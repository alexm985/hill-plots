## 2024-05-24 - Accessible Form Validation and Label Linking
**Learning:** Native browser `alert()` is highly disruptive for simple form validation and provides poor context for screen readers. Furthermore, standard custom form components without explicitly linked `id` and `htmlFor` attributes break mobile click-to-focus behavior and reduce overall accessibility.
**Action:** Always replace native `alert()` calls with conditionally rendered inline error messages using `role="alert"`. Additionally, explicitly link all form labels to their respective inputs using `htmlFor` and `id` attributes.
