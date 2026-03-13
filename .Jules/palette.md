## 2024-03-13 - Icon-only buttons lacking ARIA labels
**Learning:** Found several icon-only buttons (like the carousel arrows in Hero.tsx and the WhatsAppButton) that lack ARIA labels, which is a common accessibility issue for screen readers.
**Action:** Always add `aria-label` attributes to icon-only buttons.
