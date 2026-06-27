## 2025-06-27 - Tooltips & Icon Buttons Keyboard Accessibility
**Learning:** Adding hover tooltips (using Tailwind `group-hover`) to icon-only buttons hides functionality from keyboard users. Native `a` or `button` elements need `focus-visible` to trigger the tooltip. Also, supplementary visual elements inside need `aria-hidden="true"` to prevent screen reader redundancy.
**Action:** Always mirror `group-hover` with `group-focus-visible` on tooltip elements, add `aria-label` to the parent interactive element, and `aria-hidden="true"` to the children icons and tooltips.
