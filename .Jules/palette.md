## 2024-05-18 - Missing label-input associations in forms
**Learning:** Custom form components (like in `AreaCalculator`) in this project often lack `id` and `htmlFor` attributes linking inputs to their labels. This breaks screen reader support and makes it harder for mobile users to tap the label to focus the input.
**Action:** Always verify that every `<input>`, `<select>`, and `<textarea>` has a unique `id` that matches the `htmlFor` of its corresponding `<label>`.
