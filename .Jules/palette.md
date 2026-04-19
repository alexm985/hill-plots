## 2024-05-24 - Missing aria-labels on icon-only links
**Learning:** The application contains icon-only links (e.g., WhatsApp button) that lack `aria-label` attributes for screen readers, making them inaccessible.
**Action:** Always ensure `aria-label` attributes are added to the parent interactive elements (like `<a>` or `<button>`) and `aria-hidden="true"` is added to decorative `<i>` tags for screen reader accessibility.
