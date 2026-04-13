## 2026-04-13 - Improve Form UX and Accessibility in Area Calculator
**Learning:** Native `alert()` calls for form validation disrupt user flow and cause poor screen-reader experiences. Additionally, unlinked form labels (`htmlFor` and `id` missing) break mobile tap targets and reduce accessibility.
**Action:** Replace `alert()` with inline validation errors using `role="alert"`. Always ensure custom form elements link `htmlFor` on `<label>` elements with corresponding `id` attributes on inputs for a better interactive experience.
