## 2023-11-20 - Accessible Interactive Tooltips
**Learning:** When adding hover-based animations or tooltips to interactive elements using Tailwind CSS (like `group-hover`), screen reader and keyboard-only users miss these interactions unless explicitly mapped.
**Action:** Always mirror `group-hover` classes with `group-focus-visible` classes on interactive elements to ensure keyboard navigation triggers the same visual feedback.
