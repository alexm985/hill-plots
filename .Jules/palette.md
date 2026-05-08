## 2026-05-08 - Accessible Icon Buttons

**Learning:** Font Awesome icons within icon-only buttons (like carousel controls) are often read confusingly or skipped entirely by screen readers if not properly labelled, and keyboard users lack feedback if focus states are absent.
**Action:** Always ensure icon-only buttons have a descriptive `aria-label`, their interior `<i>` tags have `aria-hidden="true"`, and `focus-visible` styling is applied for keyboard navigation.