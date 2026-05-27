## 2026-05-27 - Keyboard Accessible Tooltips
**Learning:** When using Tailwind to create hover-based tooltips with 'group-hover' (like on a floating action button), keyboard-only users miss the tooltip and visual feedback.
**Action:** Always mirror 'group-hover' state changes (like opacity, translation, scaling) with 'group-focus-visible' classes to ensure full accessibility and visual parity for keyboard navigation.
