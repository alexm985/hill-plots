## 2023-10-25 - Floating Action Button Keyboard Accessibility
**Learning:** Floating action buttons with complex inner HTML (like icons + hidden tooltips) often rely solely on CSS `:hover` states (`group-hover:`), making their dynamic tooltips or animations completely inaccessible to keyboard users navigating via Tab.
**Action:** When adding hover-based animations or tooltips to interactive elements, consistently mirror `group-hover:` classes with `group-focus-visible:` classes, and ensure the interactive parent element uses `focus-visible:ring-*` to clearly indicate keyboard focus.
