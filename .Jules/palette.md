## 2024-03-24 - Accessible FAB Tooltips
**Learning:** Floating Action Buttons (FABs) with visually hidden tooltips that only appear on hover are completely inaccessible to keyboard users unless the tooltip animation trigger is mirrored with `group-focus-visible` and the parent anchor has clear `focus-visible` ring styling.
**Action:** Always pair `group-hover` tooltip reveals with `group-focus-visible` and ensure the parent anchor has an `aria-label` (while hiding the redundant text via `aria-hidden="true"` on the tooltip div itself).
