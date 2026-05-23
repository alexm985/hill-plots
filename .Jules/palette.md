## 2026-05-23 - Pairing group-hover with group-focus-visible for Icon-Only Tooltips
**Learning:** When using Tailwind's `group-hover` to display tooltips on icon-only interactive elements, the tooltip remains invisible to keyboard users navigating via Tab unless a focus state is also defined.
**Action:** Always mirror `group-hover` visibility and transform classes with `group-focus-visible` classes (e.g., `group-focus-visible:opacity-100 group-focus-visible:translate-x-0`) to ensure the tooltip is revealed upon keyboard focus.
