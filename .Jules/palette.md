## 2026-06-08 - Interactive Element Hover and Focus Parity
**Learning:** Interactive elements utilizing Tailwind's `group-hover` for visual states (like expanding tooltips or scaling effects) often omit equivalent states for keyboard users, leading to a degraded experience during keyboard navigation.
**Action:** When adding hover-based animations or tooltips to interactive elements using Tailwind (like 'group-hover'), consistently mirror them with 'group-focus-visible' classes to ensure keyboard navigation accessibility.
