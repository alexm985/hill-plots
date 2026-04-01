## 2024-05-15 - [Add ARIA labels to Font Awesome icons]
**Learning:** Found multiple instances of icon-only links without ARIA labels, causing accessibility issues.
**Action:** Always add `aria-label` to parent links and `aria-hidden="true"` to icon tags.
## 2024-05-15 - [Improve Error Clarity in Form]
**Learning:** Avoid using native browser `alert()` for form validation; use conditionally rendered inline error messages with `role="alert"` for better user experience and screen-reader accessibility.
**Action:** Replace `alert()` with an inline error message in AreaCalculator.
