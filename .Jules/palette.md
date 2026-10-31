## 2024-05-13 - Tooltip Keyboard Accessibility
**Learning:** When using group-hover tooltips on icon-only links, keyboard users miss both the visual tooltip and context. The group-hover pattern must be paired with group-focus-visible to ensure keyboard users can trigger the tooltip, and the link must always have an aria-label.
**Action:** Always combine 'group-hover' utilities with 'group-focus-visible' for custom CSS tooltips, and explicitly assign 'aria-label' to the interactive parent.
