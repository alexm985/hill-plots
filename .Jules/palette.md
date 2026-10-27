## 2024-10-27 - Floating Button Keyboard Navigation
**Learning:** Floating, animated action buttons (like WhatsApp widgets) are often inaccessible via keyboard. They miss focus rings due to absolute positioning, and tooltips shown on `group-hover` don't appear on keyboard focus.
**Action:** Always add `group-focus-visible` alongside `group-hover` for tooltips, ensure parent interactive elements have appropriate border-radius (e.g. `rounded-full`) so `focus-visible:ring` shapes correctly, and hide decorative elements (icons, visual tooltips) with `aria-hidden="true"`.
