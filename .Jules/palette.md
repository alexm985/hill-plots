## 2024-03-24 - Interactive Component Tooltip Accessibility
**Learning:** Tooltips that appear on hover (`group-hover`) are inaccessible to keyboard users unless paired with `focus-visible` states.
**Action:** Always pair `group-hover` tooltip appearance classes with `group-focus-visible` (e.g., `group-hover:opacity-100 group-focus-visible:opacity-100`) and ensure the parent element has appropriate `focus-visible` styling (including `rounded-full` for circular elements) so keyboard users receive the same contextual information as mouse users.
