# 🌞 Golden Sol Tanning

A modern, fast, and fully custom website for **Golden Sol Tanning**, built with **Next.js 15**, **React 19**, **Tailwind CSS 4**, and a **serverless analytics system** powered by **Firebase Firestore**.

---

## Features

- **Next.js 15 App Router** (with Turbopack for blazing dev speed)
- **Tailwind CSS 4** for modern styling
- **Firebase Firestore Analytics**:
  - Tracks page views and client screen dimensions
  - Captures IP, referrer, user agent, and timestamp
  - Logs are stored in Firestore for full control and privacy
- **Responsive, accessible UI**
- **Custom React hooks** for reusable behavior
- **Optimized for Vercel** (deployment-ready)
- No third-party analytics or tracking scripts — 100% self-owned data

---

## Tech Stack

| Tool                                                               | Purpose                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| [Next.js 15](https://nextjs.org/)                                  | React framework for server-side rendering, routing, and API routes |
| [React 19](https://reactjs.org/)                                   | Component-based UI                                                 |
| [Tailwind CSS 4](https://tailwindcss.com/)                         | Utility-first styling                                              |
| [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup) | Secure server-side access to Firestore                             |
| [Firestore](https://firebase.google.com/products/firestore)        | Cloud database for storing analytics logs                          |
| [React Icons](https://react-icons.github.io/react-icons/)          | Icon set integration                                               |
| [clsx](https://github.com/lukeed/clsx)                             | Utility for conditional classNames                                 |

---

## Custom Analytics System

This project includes a lightweight custom analytics solution built with:

- A reusable `useTrackPage` hook (runs in the browser)
- A secure `app/api/track` API route (server-side)
- Firebase Firestore as the database

### Data Collected:

- Page URL
- Event type (e.g. `pageview`)
- Screen dimensions
- Referrer
- Public IP address
- User agent string
- Timestamp

All data is stored server-side and never shared with third parties.

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/your-username/golden_sol.git
cd golden_sol

# Install dependencies
npm install

# Run the dev server
npm run dev
```
