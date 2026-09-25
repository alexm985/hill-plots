## 2025-03-05 - Ensuring visibility of interactive tooltips on keyboard focus
**Learning:** When using Tailwind's `group-hover` to show tooltips or supplementary content for interactive elements like floating icon buttons (e.g., WhatsApp button), keyboard users often miss this context because `group-focus-visible` isn't applied.
**Action:** Always complement `group-hover` utility classes (like `group-hover:opacity-100`) with their `group-focus-visible` equivalents (`group-focus-visible:opacity-100`) to ensure accessibility for keyboard navigation.
