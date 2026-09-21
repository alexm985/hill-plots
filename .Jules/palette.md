## 2025-03-05 - Inline Validation and Label Associations
**Learning:** Using native alert() for validation disrupts user flow and lacks proper accessibility. Inputs without linked labels (htmlFor/id) fail to support mobile click-to-focus and screen reader context.
**Action:** Always replace native alerts with conditionally rendered, styled inline error messages (role="alert") and explicitly link form labels to their inputs.
