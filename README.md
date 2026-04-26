# Venkata Harish — Portfolio

Dark-themed AI Engineer portfolio built with Next.js 14 + Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Before you deploy — update these

### 1. Your real links in `data/index.js`
```js
linkedin: "https://www.linkedin.com/in/YOUR_USERNAME/",
github:   "https://github.com/YOUR_USERNAME",
leetcode: "https://leetcode.com/YOUR_USERNAME/",
```

### 2. Add GitHub / live links to each project
In `data/index.js`, find each project and fill in:
```js
github: "https://github.com/YOUR_USERNAME/repo-name",
liveUrl: "https://your-app.vercel.app",
```
If a project is internal (like TCS work), leave both as `null` — it shows an "internal" badge.

## Deploy to Vercel (free, 2 minutes)

1. Push this folder to a GitHub repo
2. Go to https://vercel.com → New Project → Import your repo
3. Framework: **Next.js** (auto-detected)
4. Click **Deploy**

Done. Your portfolio is live at `https://your-repo.vercel.app`

## Customize

- **Colors**: Edit `tailwind.config.js` — change `accent: '#00FF85'` to any color
- **Add a project**: Add an entry in `data/index.js` under `projects`
- **Add a company**: Add to `companies` array — a page at `/companies/your-id` is auto-generated
- **Skills**: Edit the `skills` object in `data/index.js`

## Structure

```
portfolio/
├── data/
│   └── index.js          ← ALL your content lives here
├── pages/
│   ├── index.js          ← Homepage
│   └── companies/
│       └── [slug].js     ← Auto-generated company pages
├── components/
│   ├── Navbar.jsx
│   └── ProjectCard.jsx
└── styles/
    └── globals.css
```
