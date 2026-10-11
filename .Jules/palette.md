## 2024-05-24 - Interactive Tooltips on Floating Action Buttons
**Learning:** Icon-only floating buttons often rely on `group-hover` tooltips for context. Screen readers miss this context without `aria-label`, and keyboard users miss the visual tooltip without `group-focus-visible` mirroring the hover state.
**Action:** Always add `aria-label` to the parent anchor/button, add `aria-hidden="true"` to supplementary visual elements (icons, tooltips), and consistently mirror `group-hover` utility classes with `group-focus-visible` for inclusive keyboard interactions.
