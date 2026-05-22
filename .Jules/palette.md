## 2025-03-08 - Keyboard Accessible Tooltips
**Learning:** When using Tailwind `group-hover` to show tooltips or supplementary information on icon-only interactive elements (like floating action buttons), keyboard users miss this context completely unless the hover states are mirrored with focus states.
**Action:** Always combine `group-hover` with `group-focus-visible` (e.g., `group-hover:opacity-100 group-focus-visible:opacity-100`) to ensure tooltips reveal on tab-focus, providing equivalent experiences for keyboard and mouse navigation.
