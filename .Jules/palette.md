## 2024-11-10 - Tooltip Keyboard Focus Visibility
**Learning:** Tooltips that rely exclusively on `group-hover` for visibility remain hidden during keyboard navigation, reducing context for keyboard-only users.
**Action:** Always mirror `group-hover` classes with `group-focus-visible` on tooltips, and apply `inline-block rounded-full focus:outline-none focus-visible:ring-2` to the parent anchor for correct focus ring shaping.
