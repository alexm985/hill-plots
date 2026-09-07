
## 2024-11-20 - Keyboard Accessibility for Hover-based UI Elements
**Learning:** In Tailwind CSS, complex visual effects such as tooltips and scaling transformations are frequently tied exclusively to `group-hover`. This inadvertently excludes keyboard-only users from experiencing helpful supplementary information or visual feedback on focus.
**Action:** Always pair `group-hover` utility classes with equivalent `group-focus-visible` classes on interactive elements, and assure appropriate `aria-label` coverage on the main focusable element while using `aria-hidden` on purely visual or supplementary components (like tooltips or icons) to prevent screen reader redundancy.
