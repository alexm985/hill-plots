## 2025-02-28 - Floating Action Button Tooltip Visibility
**Learning:** Floating action buttons with hover-triggered tooltips often fail to display the tooltip for keyboard users navigating via Tab, keeping important context hidden from non-mouse users.
**Action:** Always mirror `group-hover:` utility classes with `group-focus-visible:` on tooltip elements, and ensure the parent focusable element has `focus:outline-none focus-visible:ring` to guarantee keyboard accessibility.
