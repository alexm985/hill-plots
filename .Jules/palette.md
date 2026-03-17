## 2024-10-27 - Missing Label-Input Associations
**Learning:** Custom form components (like in `AreaCalculator.tsx` and `ContactForm.tsx`) frequently lack `id` and `htmlFor` attributes, reducing screen reader accessibility and preventing the standard click-label-to-focus behavior.
**Action:** Always add explicit label-input associations using `htmlFor` on labels and matching `id`s on inputs when creating or modifying form elements.
