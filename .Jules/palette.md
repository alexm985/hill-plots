
## 2026-09-11 - [Ensure Tooltips Show on Keyboard Focus]
**Learning:** When using Tailwind's \`group-hover\` to show tooltips or hidden elements visually, keyboard-only users will miss them unless \`group-focus-visible\` is also explicitly mirrored (e.g. \`group-hover:opacity-100 group-focus-visible:opacity-100\`).
**Action:** Always pair \`group-hover\` visibility and transform classes with their \`group-focus-visible\` equivalents on the child elements when building accessible interactive widgets like floating buttons.
