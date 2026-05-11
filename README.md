# Premium Developer Portfolio

A high-end, SaaS-style portfolio designed for Full Stack .NET Engineers and Cloud Architects. This portfolio leverages modern web design patterns, glassmorphism, glowing micro-animations, and a highly optimized static architecture to deliver a "wow" factor.

## Architecture

This portfolio has been intentionally structured for **maximum performance and ease of maintenance** without relying on heavy frontend frameworks.

- **`index.html`**: The main shell and layout structure.
- **`styles.css`**: All styling, design tokens, and CSS animations.
- **`app.js`**: Core logic for intersection observers, canvas animations, and Swagger UI rendering.
- **`data.js`**: A centralized configuration file containing constant values, API endpoints, and typewriter phrases.
- **`assets/`**: Directory containing static assets like the `resume.pdf`.

## How to Update Content

You do not need to hunt through thousands of lines of HTML to update your details. 
The most dynamic content (like typewriter phrases and the Swagger API mock data) has been extracted to `data.js`.

To update your API endpoints or typewriter roles:
1. Open `data.js`.
2. Modify the `phrases` array or the `ENDPOINTS` array.
3. Save the file. The changes will automatically reflect on the website.

*Note: For the static text blocks in the Hero or Experience sections, you can update them directly within the clearly demarcated sections of `index.html`.*

## Modifying the Resume

To update the resume download file:
1. Replace the placeholder `resume.pdf` located in the `assets/` folder with your actual PDF.
2. Ensure the filename remains `resume.pdf`, or update the `href` paths in `index.html` accordingly.

## Future Upgrades & Roadmap

To evolve this portfolio into a fully-fledged product website, the following upgrades are planned:

1. **Next.js / React Migration**: Transition the current static setup to a Next.js framework for improved component reusability, static site generation (SSG), and routing.
2. **Headless CMS Integration**: Connect the portfolio to a headless CMS (like Sanity or Contentful) so that adding new projects and blog posts can be done via a dashboard rather than code edits.
3. **Interactive Blog**: Add an MDX-powered technical blog section to showcase deep-dive technical content and tutorials.
4. **Dark/Light Mode Toggle**: Implement a robust theme switcher using CSS variables and local storage.
5. **Analytics Integration**: Replace the current local-storage visitor counter with privacy-focused analytics (e.g., Plausible or Vercel Analytics).
