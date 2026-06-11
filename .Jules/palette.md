## 2026-06-11 - Inline validation over browser alerts
**Learning:** Native browser alerts in calculators provide poor user experience and are inaccessible; inputs often lacked corresponding `htmlFor` mappings.
**Action:** Always replace alerts with conditionally rendered inline errors with `role="alert"` and ensure inputs have matching `id` for labels to aid click-to-focus and screen readers.
