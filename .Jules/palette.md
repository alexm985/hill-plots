## 2025-03-08 - Keyboard Focus Parity with Hover States
**Learning:** When using Tailwind `group-hover` for interactive animations or revealing tooltips, keyboard users miss the experience if focus states aren't explicitly matched.
**Action:** Always pair `group-hover:[class]` with `group-focus-visible:[class]` to ensure hover animations and tooltips are also revealed when navigating via keyboard (tabbing).
