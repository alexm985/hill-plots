## 2024-10-18 - Tooltip Keyboard Accessibility
**Learning:** Interactive components (like floating buttons) with CSS-based tooltips often trigger on `group-hover` but lack `group-focus-visible`, hiding contextual information from keyboard users.
**Action:** Always mirror `group-hover` utility classes with `group-focus-visible` for tooltips and animations, and ensure the parent element has appropriate focus styles and ARIA labels.
