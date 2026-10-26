## 2024-10-24 - Floating Action Button Tooltip Accessibility
**Learning:** Tooltips on floating action buttons (like WhatsApp) that rely solely on `group-hover` are invisible to keyboard users navigating via Tab. Furthermore, lacking an `aria-label` makes them opaque to screen readers.
**Action:** Always mirror `group-hover` with `group-focus-visible` for tooltips, and provide `aria-label` to the parent anchor while hiding decorative children (`aria-hidden="true"`). Ensure the parent has `focus-visible:ring` and appropriate border radius.
