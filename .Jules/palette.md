## 2024-05-24 - Floating Action Buttons (FAB) with Visual Tooltips
**Learning:** Animated, icon-only FABs with delayed visual tooltips are entirely inaccessible to screen readers and keyboard users if relying only on the visual text that appears on hover. Native focus and semantic labels are required for discovery.
**Action:** Always add `aria-label` to the parent anchor/button of an icon-only FAB, apply `aria-hidden="true"` to any decorative tooltip `div` and icon, and ensure a `focus-visible` ring is added with appropriate `border-radius` to match the FAB's shape.
