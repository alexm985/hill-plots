## 2024-11-04 - Floating Action Buttons Require Focus Rings and Tooltip Mirroring

**Learning:** Floating action buttons with visually hidden tooltips that only appear on hover leave keyboard users without context. Furthermore, without `inline-block` and `rounded-full` on the parent `<a>` element, focus rings (`focus-visible:ring`) appear incorrectly shaped. Finally, screen readers need explicit `aria-label`s on the parent and `aria-hidden="true"` on child icons/tooltips.

**Action:** Always mirror `group-hover` tooltips with `group-focus-visible`. Ensure parent elements for circular icon-only buttons receive `aria-label`, `inline-block`, `rounded-full`, and `focus-visible` classes, while hiding the child elements from assistive technologies.
