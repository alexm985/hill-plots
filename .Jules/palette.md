## 2024-05-18 - Missing label associations in Area Calculator form elements
**Learning:** Custom form elements without linked labels lack accessibility. Unlinked `<label>` without `htmlFor` attributes to corresponding input `id` attributes result in poor screen reader support and mobile click-to-focus behavior.
**Action:** Always link form labels using the `htmlFor` attribute to their matching `id` inputs.
