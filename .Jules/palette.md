## 2023-10-27 - Icon-only buttons lacking ARIA labels
**Learning:** This application makes heavy use of FontAwesome icons inside anchor (`<a>`) tags and button elements without accompanying visible text or `aria-label`s. This is an accessibility issue because screen readers will either read nothing or the URL, providing no context to the user.
**Action:** Always verify that interactive elements with only icons have descriptive `aria-label` attributes added, specifically checking social media links and floating action buttons like WhatsApp.
