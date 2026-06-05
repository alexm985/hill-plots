## 2025-05-18 - Init

## 2023-10-27 - Keyboard Accessible Tooltips
**Learning:** Hover-based tooltips on interactive elements (like `group-hover:opacity-100`) are completely inaccessible to keyboard users, leaving them without important context (like the "Chat with us" text on the WhatsApp button).
**Action:** Always mirror `group-hover` utility classes with `group-focus-visible` classes (e.g., `group-focus-visible:opacity-100`) on tooltip elements when the parent interactive element receives focus.
