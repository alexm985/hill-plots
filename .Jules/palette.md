
## 2025-03-09 - Accessible Icon-Only Floating Actions
**Learning:** Floating, icon-only buttons (like WhatsApp widgets) often rely heavily on tooltips for context, which are frequently inaccessible via keyboard navigation. Redundant text announcements can occur if the icon itself isn't explicitly hidden from screen readers.
**Action:** Always add `aria-label`s to the parent interactive element of icon-only buttons, add `aria-hidden="true"` to child icons, ensure focus rings (e.g., `focus-visible:ring-2`) are correctly shaped, and tie tooltip visibility to both `group-hover` and `group-focus-visible`.
