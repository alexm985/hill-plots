## 2026-08-12 - Icon-Only Button Accessibility
**Learning:** The project relies heavily on Font Awesome for interactive icon-only elements (e.g., hero slider buttons), which currently lack screen reader contexts and visible keyboard focus states.
**Action:** Always ensure ARIA labels are added to parent interactive elements, `aria-hidden="true"` is applied to child `<i>` tags, and `focus-visible` styling is enforced for keyboard navigation accessibility.
