## 2024-04-12 - Added ARIA attributes to icon-only links
**Learning:** Font Awesome icons used inside anchor tags without visible text are completely invisible to screen readers, causing accessibility issues.
**Action:** Always ensure `aria-label` attributes are added to the parent interactive elements (like `<a>` or `<button>`) and `aria-hidden="true"` is added to the inner `<i>` tags for screen reader accessibility.
