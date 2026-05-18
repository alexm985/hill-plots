## 2024-03-24 - WhatsApp Button Accessibility
**Learning:** Found an animated WhatsApp button (`animate-bounce-custom`) lacking `aria-label` and focus visibility. While the visual tooltip handles hover context, keyboard users lacked both context (no aria-label on icon) and focus indication.
**Action:** Always pair `group-hover` animations with `group-focus-visible` for equivalent keyboard interactive states, and ensure `aria-hidden="true"` is on supplementary visual elements (like tooltip text) when the main link is labeled.
