## 2023-10-27 - Replace native alerts with inline accessible error messages
**Learning:** Native browser alerts (`alert()`) trap focus, create a poor user experience, and lack semantic meaning for screen readers. Furthermore, inputs in custom components often lack `id` and `htmlFor` links.
**Action:** Always link form labels to inputs using `htmlFor` and `id`. Replace native alerts with conditionally rendered inline error messages using `role="alert"` for a non-blocking, accessible error state.
