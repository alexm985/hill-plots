
## 2024-05-17 - Inconsistent Carousel Accessibility
**Learning:** Carousels across the application (like Hero and Testimonials) have inconsistent accessibility implementations. While Testimonials had `aria-label`s on navigation buttons, the Hero component was missing them completely and also lacked focus indicators, making keyboard and screen-reader navigation difficult.
**Action:** Always verify accessibility implementation (like `aria-label` and `aria-hidden="true"`) consistently across all similar interactive components, not just on a component-by-component basis.
