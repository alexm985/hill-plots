## 2024-05-01 - Enhance Hero Component Accessibility
**Learning:** Carousel navigation controls mapped exclusively to `<i>` tag icons without `aria-label`s makes it impossible for screen reader users to identify or interact with the slider properly.
**Action:** Always add descriptive `aria-label` tags to purely visual button elements and add `aria-hidden="true"` to structural/decorative font icons used within those interactive contexts.
