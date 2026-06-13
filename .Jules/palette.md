## 2024-05-24 - Interactive Element Animation States
**Learning:** Adding tailwind animation classes like `group-hover:scale-110` to elements inside an anchor tag leaves keyboard navigation out; the visual change only triggers on mouse hover, creating an inconsistent experience for keyboard users navigating via Tab.
**Action:** Always mirror `group-hover` utility classes with `group-focus-visible` classes (e.g. `group-focus-visible:scale-110`) when dealing with interactive UI elements containing animated children or tooltips.
