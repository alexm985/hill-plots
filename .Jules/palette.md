## 2026-03-12 - Accessibility of Icon-only Interactive Elements
**Learning:** The project extensively uses Font Awesome icons within buttons and anchors without visible text, missing descriptive ARIA labels which renders them inaccessible to screen readers.
**Action:** Always ensure `aria-label` attributes are present on icon-only interactive elements (like the WhatsApp floating button or carousel navigation) across this application's components.
