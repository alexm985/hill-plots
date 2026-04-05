## 2024-05-24 - Area Calculator Validation & A11y Improvement
**Learning:** Native `alert()` modals for form validation create jarring experiences and are inaccessible to screen readers. Furthermore, inputs without explicit explicit `id`/`htmlFor` label bindings break mobile click-to-focus behavior and reduce accessibility.
**Action:** Always replace native `alert()` with conditionally rendered inline errors using `role="alert"` for form validation. Always explicitly link `<label>` with `<input>` using matching `htmlFor` and `id` attributes.
