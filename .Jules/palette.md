## 2024-05-20 - Icon Accessibility
**Learning:** The project extensively uses Font Awesome icons within buttons and anchors without visible text (e.g., WhatsApp floating button). This makes them inaccessible to screen readers.
**Action:** Always ensure `aria-label` attributes are added to the parent interactive elements and `aria-hidden="true"` is added to the `<i>` tags for screen reader accessibility.
