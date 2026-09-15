
## 2023-10-27 - Tooltip Accessibility and Focus Rings
**Learning:** When using Tailwind's `group-hover` for custom tooltips (like in the WhatsApp button), keyboard users miss out unless `group-focus-visible` is also explicitly mirrored on those same utility classes. Additionally, focus rings (like `focus-visible:ring`) on custom-shaped interactive elements (like circles) will default to rectangles unless the interactive parent element itself has the matching border-radius utility (e.g., `rounded-full`).
**Action:** Always mirror `group-hover` visual state changes with `group-focus-visible` when the group is a focusable element, and ensure parent interactive wrappers contain explicit border-radius definitions so focus rings contour correctly to the UI.
