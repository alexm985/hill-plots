## 2024-05-24 - Accessible WhatsApp Button Focus and Hover State Synchronization
**Learning:** Adding complex hover states (tooltips, scaling) via tailwind `group` to floating buttons leaves keyboard users without the same visual feedback. Because the anchor element wrap requires a focus ring, providing matching `focus-visible` states to child elements is critical for parity.
**Action:** When creating grouped hover components, always mirror `group-hover:x` utility classes with `group-focus-visible:x` for interactive elements.
