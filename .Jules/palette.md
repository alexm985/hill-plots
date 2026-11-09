## 2025-02-28 - Icon-Only Interactive Elements Accessibility
**Learning:** The project extensively uses Font Awesome icons within floating and fixed anchor tags (like WhatsApp and footer links) without screen-reader accessible text or keyboard focus indicators.
**Action:** Always ensure `aria-label` is present on parent `<a>` tags, add `aria-hidden="true"` to child `<i>` and tooltip elements, and apply `focus:outline-none focus-visible:ring-2` to the parent with `inline-block` so keyboard navigation functions visually and correctly for screen readers.
