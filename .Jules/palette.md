## 2025-02-23 - Accessibility Patterns in Hill Plots
**Learning:** Found a recurring pattern in this app's components where FontAwesome icons within buttons and anchor links lack `aria-label`s and fail to hide themselves from screen readers. Also observed custom forms missing explicit `id` to `htmlFor` connections.
**Action:** Always ensure interactive elements using FontAwesome icons are accessible via `aria-label` on the parent and `aria-hidden='true'` on the icon tag. Ensure custom form components explicitly bind their labels and inputs.
