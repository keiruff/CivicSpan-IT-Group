# CivicSpan IT Group Website

Marketing website for CivicSpan IT Group, a Virginia-based technology support business providing practical IT support, digital solutions, documentation, workflow assistance, and infrastructure-focused technology support for businesses, nonprofits, and engineering environments.

Built with [Next.js](https://nextjs.org/) (App Router), React, TypeScript, and Tailwind CSS.

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

```text
http://localhost:3000
```

Other useful commands:

```bash
npm run build       # Production build
npm run start       # Serve the production build
npm run lint        # Run ESLint
npm run type-check  # Run the TypeScript compiler without emitting output
```

---

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- Python (image optimization)
- Git
- GitHub
- Vercel

---

## Deployment

This website is deployed using:

- GitHub
- Vercel

Changes pushed to the main branch automatically trigger deployment updates.

---

## Performance Optimization

Image optimization for assets in `public/` is handled using:

```text
optimize_images.py
```

This script compresses and optimizes image assets to improve:

- Load speed
- Mobile responsiveness
- Lighthouse performance scores
- Largest Contentful Paint (LCP)

---

## Purpose

CivicSpan IT Group was built to provide accessible, reliable, and practical technology support with a focus on operational efficiency, infrastructure environments, and real-world business technology needs.

---

## License

© 2026 CivicSpan IT Group. All rights reserved.
