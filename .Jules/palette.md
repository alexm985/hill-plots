
## 2024-05-18 - Hover Tooltip Keyboard Accessibility
 **Learning:** Tailwind's `group-hover` utility is often used to reveal tooltips inside interactive elements (like anchor tags or buttons) on mouse hover. However, keyboard users who navigate via <kbd>Tab</kbd> miss out on these tooltips because focus states do not trigger hover styles by default.
 **Action:** Whenever `group-hover` is used to reveal visual aids or scale elements inside an interactive container, consistently apply `group-focus-visible` to mirror these effects for keyboard users.
