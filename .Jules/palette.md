## 2024-06-17 - Keyboard Accessibility for Floating Actions
**Learning:** Floating action buttons with hidden tooltips shown on hover often fail keyboard accessibility because the tooltip remains hidden when focused via tab.
**Action:** Always pair `group-hover` Tailwind classes with `group-focus-visible` on child elements to ensure tooltips and interactive states are accessible to keyboard users.
