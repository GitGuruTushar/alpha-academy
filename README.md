# Alpha Academy — Website

**🌐 Live site: https://gitgurutushar.github.io/alpha-academy/**

The official website for **Alpha Academy**, a coaching institute in Ankleshwar, Gujarat
(classes 7th–12th, GSEB & CBSE English medium, plus IIT-JEE, NEET & GUJCET).

Built as a fast, responsive **React + Vite** static site. No backend, no database —
free and effortless to host. The enquiry form opens a pre-filled WhatsApp chat.

## Pages
- **Home** — hero, courses, why-us, Learn/Prepare/Succeed, July offer, campus, timings
- **About Us** — story, mission & vision, values, approach
- **Courses** — detailed programs + how we teach
- **Gallery** — real photos + campus walk-through video (with lightbox)
- **Contact Us** — WhatsApp enquiry form, contact cards, timings, Google Map

## Run it locally

```bash
npm install      # first time only
npm run dev      # start dev server → http://localhost:5173
```

Open it on your phone/tablet on the same Wi-Fi using the "Network" URL that `npm run dev`
prints, to test responsiveness on real devices.

## Build for production

```bash
npm run build    # outputs static files to dist/
npm run preview  # preview the production build locally
```

## Hosting / deploy
This repo auto-deploys to **GitHub Pages** on every push to `main`, via the workflow in
`.github/workflows/deploy.yml`. Live at https://gitgurutushar.github.io/alpha-academy/.

Just edit, commit, and `git push` — the site rebuilds and updates itself in ~1 minute.

(Config for **Netlify** / **Vercel** is also included — `public/_redirects`, `vercel.json` —
if you ever want a cleaner root URL or a custom domain.)

## Editing content
Almost everything is in one file: **`src/data/site.js`**
- Phone, email, address, timings
- Courses, "why us" points, the July offer
- **Instagram link** — paste your page URL into `site.instagram` when it's ready
  (the icon is shown but disabled until then).

Photos and the logo live in `src/assets/`. Original pamphlets/photos are kept in
`source-media/`.
