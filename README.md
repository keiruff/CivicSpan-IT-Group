# CivicSpan IT Group Website

Marketing website for CivicSpan IT Group, a Virginia-based technology support business providing practical IT support, digital solutions, documentation, workflow assistance, and infrastructure-focused services for small and medium-sized organizations.

Built with Next.js (App Router), React, TypeScript, and Tailwind CSS.

---

## Website

https://civicspanitgroup.com

---

## Pages

- `/` — Homepage and business overview
- `/services` — Service details
- `/capabilities` — Capabilities statement
- `/who-we-support` — Audience and client types
- `/tools-and-utilities` — Free tools and utilities
- `/contact` — Contact form and scheduling
- `/privacy` — Privacy policy
- `/cookies` — Cookie policy
- `/disclaimer` — Website disclaimer

---

## Project Structure

```text
CivicSpan-IT-Group/
│
├── src/
│   ├── app/
│   │   ├── (pages)/          # Privacy, cookies, disclaimer
│   │   ├── api/contact/      # Contact form API route
│   │   ├── capabilities/
│   │   ├── contact/
│   │   ├── services/
│   │   ├── tools-and-utilities/
│   │   ├── who-we-support/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/           # Header, Footer, Hero, CookieBanner
│
├── public/                   # Static assets (images, favicon, robots.txt, sitemap.xml)
│
├── optimize_images.py        # Optional image optimization helper for public/ assets
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## Local Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Then visit:

http://localhost:3000

Other useful commands:

```bash
npm run build       # Production build
npm run start       # Serve the production build
npm run lint        # Run ESLint
npm run type-check  # Run the TypeScript compiler without emitting output
```

---

## Technologies

- Next.js
- React
- TypeScript
- Tailwind CSS
- Python (image optimization helper)
- Git / GitHub
- Vercel

---

## Deployment

This website is deployed using GitHub and Vercel. Changes pushed to the default branch trigger automated deployments.

If you need to update environment variables or Vercel settings, use the Vercel dashboard for the project.

---

## Performance Optimization

Image optimization for assets in `public/` is handled using the `optimize_images.py` script. Run it locally before committing large images to reduce bundle size and improve Lighthouse scores.

---

## Purpose

CivicSpan IT Group provides accessible, reliable, and practical technology support with a focus on operational efficiency, infrastructure environments, and real-world business technology needs.

---

## Contact

For commercial inquiries or support requests, use the contact form on the website or email: info@civicspanitgroup.com

---

## License / Copyright

© 2026 CivicSpan IT Group. All rights reserved.
