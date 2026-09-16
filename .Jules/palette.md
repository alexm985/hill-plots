## 2025-03-01 - Avoid native alert() for forms
**Learning:** Using native browser `alert()` for form validation is disruptive to UX and inaccessible to screen readers, especially in interactive components like `AreaCalculator.tsx`.
**Action:** Replace `alert()` calls with conditionally rendered inline error elements using `role="alert"` and semantic styling (e.g., `text-red-400 bg-red-400/10`) to provide non-blocking, accessible feedback.

## 2025-03-01 - Form element id/htmlFor linkage
**Learning:** Custom React input forms without `id` and corresponding `htmlFor` on labels lack structural accessibility, preventing screen readers from associating labels with inputs and breaking click-to-focus behavior on mobile devices.
**Action:** Always ensure that form inputs have unique `id` attributes that strictly match the `htmlFor` of their corresponding `<label>`.