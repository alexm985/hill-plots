
## 2025-03-04 - Form Label Accessibility and Mobile Focus
**Learning:** Forms in this project frequently use `<label>` tags adjacent to `<input>` tags, but without connecting `htmlFor` and `id` attributes. This breaks accessibility (screen readers don't read the label context correctly) and mobile usability (users can't tap the label to focus the input, which is critical for good mobile UX).
**Action:** When creating or reviewing forms (e.g., `ContactForm`, `AreaCalculator`), ensure every `<label>` has a proper `htmlFor` that corresponds exactly to the `id` of its related `<input>`, `<select>`, or `<textarea>`.
