## 2025-02-28 - Floating Action Button Tooltip Alignment
**Learning:** When using Tailwind's group-hover to show tooltips on icon-only buttons, keyboard navigation is often overlooked, causing the tooltip to remain hidden and the button to lack visual feedback for screen reader and keyboard users.
**Action:** Always pair group-hover tooltip display classes with group-focus-visible (e.g. group-hover:opacity-100 group-focus-visible:opacity-100) and ensure the parent has aria-label and focus-visible:ring styling.
