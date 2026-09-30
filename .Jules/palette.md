## 2024-05-14 - Mirroring group-hover with group-focus-visible
**Learning:** When using Tailwind's `group-hover` for interactive visual feedback (like showing hidden tooltips or scaling icon sizes inside a parent container), the same visual cues fail to trigger during keyboard navigation because focus is applied to the parent, not a hover state.
**Action:** Always pair `group-hover` utility classes with equivalent `group-focus-visible` classes (e.g., `group-hover:opacity-100 group-focus-visible:opacity-100`) to ensure consistent visual feedback for keyboard users.
