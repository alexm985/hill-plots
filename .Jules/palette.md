## 2024-06-09 - Tooltip Keyboard Accessibility on Icon-only Buttons
**Learning:** When using Tailwind`s `group-hover` utility to display a tooltip inside an interactive element, keyboard-only users will not see the tooltip on focus unless `group-focus-visible` utilities are symmetrically applied.
**Action:** Always pair `group-hover:opacity-100 group-hover:translate-x-0` on tooltips with `group-focus-visible:opacity-100 group-focus-visible:translate-x-0` and ensure the parent anchor/button has proper `focus-visible` ring styling to maintain full accessibility.
