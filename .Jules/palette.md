
## 2024-05-18 - Hover Animation Accessibility
**Learning:** Decorative elements with CSS transition animations applied via `group-hover` (like scaling and tooltips on floating action buttons) are invisible to keyboard-only users who navigate via `Tab`. Screen readers skip tooltips not programmatically associated, and keyboard users miss visual context.
**Action:** Always mirror `group-hover` classes with `group-focus-visible` (e.g., `group-focus-visible:opacity-100 group-focus-visible:translate-x-0`) on inner elements. Ensure the parent interactive element has `focus:outline-none focus-visible:ring-2` to clearly highlight the currently focused element.
