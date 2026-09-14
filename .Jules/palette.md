
## 2024-05-18 - WhatsApp Button Accessibility with Tailwind
**Learning:** Tooltips that appear on hover using `group-hover` must be identically revealed for keyboard users by adding corresponding `group-focus-visible` classes, ensuring focus states match hover states visually.
**Action:** When adding hover tooltips or animations to an interactive element with Tailwind, always mirror the `group-hover:*` utility classes with `group-focus-visible:*` classes on the child elements, and apply `focus-visible:ring` or similar focus rings to the parent.
