## 2025-04-21 - Floating Action Button Accessibility
**Learning:** Floating action buttons (like WhatsApp widgets) often rely on visually hidden tooltips that only appear on hover, leaving them inaccessible to screen readers by default. The FontAwesome icon alone does not provide semantic meaning to assistive technologies.
**Action:** Always add `aria-label` to the parent interactive element (like `<a>` or `<button>`) for floating action buttons, and explicitly hide purely decorative icons using `aria-hidden="true"`.
