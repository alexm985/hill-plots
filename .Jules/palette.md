
## 2024-03-14 - Inline Validation & Label Associations in Custom Forms
**Learning:** Native browser `alert()` popups disrupt the UX and are inaccessible. Additionally, custom form fields without explicitly linked `<label>` and `<input>` elements (via `htmlFor` and `id`) cause issues with screen readers and mobile click-to-focus behavior.
**Action:** Always replace native `alert()` validation with conditionally rendered inline error components (using `role="alert"`). Always ensure that custom form components have their `id` and `htmlFor` attributes actively linked for proper accessibility and behavior across devices.
