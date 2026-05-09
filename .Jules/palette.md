## 2025-03-09 - Accessible Form Validation and Input Association
**Learning:** Native `alert()` modals for form validation provide a poor user experience and lack proper context for screen readers. Furthermore, React form inputs often lack explicit `id` and `htmlFor` bindings, which are crucial for screen reader traversal and mobile click-to-focus behavior.
**Action:** Replace `alert()` calls with conditionally rendered inline error messages using `role="alert"`. Always explicitly associate labels and inputs using matching `id` and `htmlFor` attributes when building or refactoring custom form components.

## 2025-03-09 - Accessible Icon-Only Floating Action Buttons (FABs)
**Learning:** Icon-only buttons (like a floating WhatsApp contact button) using Font Awesome `<i>` tags are completely invisible to screen readers without an `aria-label`. Additionally, they often lack focus indicators for keyboard users, making keyboard navigation difficult or impossible to track.
**Action:** Always add descriptive `aria-label`s to the parent interactive element (e.g., `<a>` or `<button>`) of an icon-only control. Add `aria-hidden="true"` to the decorative `<i>` tag to prevent redundant or confusing screen reader output. Implement `focus-visible` styling (e.g., `focus:outline-none focus-visible:ring-2`) to ensure a clear focus state for keyboard navigation.
