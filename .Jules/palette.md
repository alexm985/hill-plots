
## 2023-10-27 - Keyboard Navigation for Interactive Elements with Tooltips
**Learning:** When using `group-hover` in Tailwind to display tooltips or trigger scale animations on interactive elements (like buttons or links), these visual cues are inaccessible to keyboard users navigating via Tab.
**Action:** Always pair `group-hover:*` classes with `group-focus-visible:*` classes on child elements, and ensure the parent interactive element has proper `focus:outline-none focus-visible:ring-*` styling with appropriate `rounded-*` classes so the focus ring shapes correctly around the element.
