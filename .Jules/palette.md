## 2024-05-14 - Initial Setup
**Learning:** Found the Palette journal, making sure it exists.
**Action:** Proceeding with UX enhancements.

## 2024-05-14 - Area Calculator UX
**Learning:** Found that the app previously used `alert()` for form validation errors, which provides a disruptive user experience and isn't optimal for screen readers. Using conditionally rendered inline error components (with ARIA `role="alert"`) provides better immediate context for screen readers and smoother interaction. Labels weren't properly associated with inputs either.
**Action:** When validating form inputs, avoid native browser `alert()` and implement conditionally rendered inline error messaging using `role="alert"`. Always map `htmlFor` on `<label>` to `id` on `<input>`.
