
## 2024-10-18 - Tooltip Accessibility and Focus States
**Learning:** When using Tailwind `group-hover` for decorative tooltips and animations on interactive elements, keyboard users miss the context and visual feedback entirely without mirroring these states.
**Action:** Consistently pair `group-hover` with `group-focus-visible` (e.g., `group-focus-visible:opacity-100`) and ensure the parent `<a>` or `<button>` has appropriate `focus-visible` ring styling and border radius to match its shape.
