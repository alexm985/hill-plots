## 2026-04-26 - Calculator Form Accessibility
**Learning:** In custom calculator forms, replacing native `alert()` dialogues with inline state-based errors (`role="alert"`) significantly reduces user disruption and improves screen-reader compatibility. Additionally, ensuring all floating inputs have explicit `id` and `htmlFor` linkages is essential for mobile tap targets.
**Action:** Always verify that input-heavy components use inline error rendering instead of browser modals, and double-check label-to-input linkage in all form components.
