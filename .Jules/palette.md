## 2024-03-08 - Form Accessibility Pattern
**Learning:** Custom form components across this application frequently lack `id` and `htmlFor` attributes linking inputs and labels. This negatively impacts screen readers and breaks the native mobile UX feature where clicking a label focuses its input.
**Action:** When creating or reviewing forms in this app, proactively verify that all `<label>` elements have a valid `htmlFor` attribute that strictly corresponds to the unique `id` of its related `<input>`, `<select>`, or `<textarea>`.
