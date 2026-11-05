## 2025-02-28 - Mirroring Hover Effects for Keyboard Navigation
**Learning:** Tooltips and interactive animations triggered by 'group-hover' (like the WhatsApp button) become inaccessible to keyboard users if not mirrored with 'group-focus-visible'.
**Action:** When adding 'group-hover' for visual feedback, always pair it with 'group-focus-visible', apply `focus-visible:ring` with the correct `border-radius` (e.g., `rounded-full`) on the parent, and ensure `aria-hidden="true"` on the supplementary visual tooltips to avoid redundant screen reader announcements.
