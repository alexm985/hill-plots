## 2024-10-19 - Accessible Tooltips for Icon Links
**Learning:** Tooltips that appear on `group-hover` for icon-only buttons remain hidden to keyboard users navigating via Tab, and screen readers will announce both the main button's `aria-label` and the tooltip's text if not properly hidden.
**Action:** Always mirror `group-hover` tooltip animations with `group-focus-visible` classes. Simultaneously, add `aria-hidden="true"` to the visible tooltip element to prevent redundant announcements, relying instead on a descriptive `aria-label` on the parent interactive element.
