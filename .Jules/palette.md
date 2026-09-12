## 2024-05-18 - Missing ARIA Labels on Icon-Only Slider Buttons
**Learning:** Custom slider components with FontAwesome arrows frequently omit `aria-label` and `aria-hidden` attributes, breaking screen reader navigation. They also lack `focus-visible` styles for keyboard navigation.
**Action:** Always enforce screen reader text and visible focus rings on custom navigational controls.
