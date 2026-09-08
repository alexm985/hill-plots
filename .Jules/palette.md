## 2025-03-01 - Interactive Element Tooltip Focus Visibility
**Learning:** When adding hover-based tooltips using Tailwind's `group-hover` on interactive elements like anchor links or buttons, keyboard users will miss the tooltip text when they tab to the element unless focus states are explicitly handled.
**Action:** Always pair `group-hover:opacity-100` and similar hover transitions with `group-focus-visible:opacity-100` on the child tooltip, and ensure the parent interactive element has `focus-visible:outline-none focus-visible:ring-2` to provide complete parity for keyboard users.
