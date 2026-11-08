## 2025-02-24 - Inline Validation & Input Linkage
**Learning:** Using native browser alerts for form validation creates a jarring user experience and poor screen-reader accessibility. Unlinked form labels also prevent mobile click-to-focus behavior.
**Action:** Always replace native alerts with conditionally rendered inline error messages (`role="alert"`) and ensure all labels use `htmlFor` matching input `id`s.
