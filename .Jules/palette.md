## 2024-05-14 - Linking Form Labels and Inputs
**Learning:** Found custom form inputs missing explicit `id` and `htmlFor` linkage. This pattern hurts accessibility for screen readers and breaks the mobile UX standard where tapping a label focuses the input (a crucial quality-of-life feature for fat-finger targets on phones).
**Action:** Always ensure custom form components have their `id` and `htmlFor` attributes actively linked.
