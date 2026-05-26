
## 2025-03-03 - [WhatsApp Button Accessibility]
**Learning:** Found that floating, icon-only buttons often lack keyboard accessibility. Also, nested tooltip text and icons within such buttons are often redundantly announced by screen readers.
**Action:** Added `aria-label` to the parent `<a>` tag, `aria-hidden="true"` to nested elements, and applied `focus-visible:ring-2` to support keyboard navigation. Ensure hover-revealed tooltips are also revealed on `group-focus-visible`.
