## 2024-05-18 - Added `htmlFor` attributes to form labels
**Learning:** This app's custom form inputs lacked explicit association between the `<label>` elements and their corresponding `<input>` or `<select>` or `<textarea>` tags. While visually apparent, screen readers struggle without `htmlFor` on the label matching the `id` on the input.
**Action:** Always verify that every label in a newly created or modified form explicitly references the target input's `id` using the `htmlFor` attribute.
