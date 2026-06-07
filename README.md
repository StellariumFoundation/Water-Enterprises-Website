# Water Suite — Investor Hub & Offline PWA

[![Official Repository](https://img.shields.io/badge/Ecosystem-Stellarium_Foundation-06b6d4?style=for-the-badge&logo=github)](https://github.com/StellariumFoundation)
[![Ecosystem Broadcaster](https://img.shields.io/badge/YouTube-@StellariumFoundation-FF0000?style=for-the-badge&logo=youtube)](http://www.youtube.com/@StellariumFoundation)

> **"Facilitating humanity's advancement through pristine physical, digital, and social automation."**

The **Water Suite PWA** is a high-performance, offline-capable progressive web application and investor portal engineered by the **Stellarium Foundation**. It provides a fully on-grid showcase of our synergistic bipedal humanoid robotics, decentralized fluid CPU compute meshes, sovereign education, and civic tools.

This repository is optimized for **extreme speed, swift responsiveness, on-grid reliability, and absolute mobile readiness**.

---

## ⚡ Speed & PWA Optimizations

We have integrated modern performance engineering blueprints directly into the app shell:
* **Stale-While-Revalidate Caching**: The background service worker interceptor caches static bundles, CSS stylesheets, images, and configuration resources, serving them instantly from memory while refreshing caches in the background.
* **Smart Server Cache headers**: Our Express production server transmits optimal cache controllers (`max-age=1y`, `immutable`) for hashed static compiler files, bypassing unnecessary browser roundtrips.
* **Lightweight Transition Timing**: Leverages highly optimized `motion/react` springs & fades to render instantaneous section responses.
* **Resource Preconnections**: Crucial external resources (Google Fonts, assets) are preconnected at the root block of `index.html` to eliminate DNS latency.
* **Haptic Vibration Feedback**: Integrated with the physical **Vibration API**, providing micro-vibrations (`12ms` clean tick) on interactive actions and bottom tab navigating to increase physical immersion on mobile.

---

## 🛠️ Local Developer Guide

**This repository uses [Bun](https://bun.sh/) for ultra-fast dependency management, bundling, and runtime.** We have migrated away from npm and Vite to unlock maximum performance.

### 1. Requirements
* **Bun** (v1.x or newer is required). Install via `curl -fsSL https://bun.sh/install | bash`

### 2. Local Setup
Clone the repository and spin up the environment with three simple commands:

```bash
# 1. Install all dependencies instantly with Bun
bun install

# 2. Run in high-performance Development Mode
bun run dev

# 3. Compile static assets for production deployment
bun run build
```

---

## 🚀 Deploying to Render (render.com)

**Render** allows you to host web applications globally with instant auto-deploys from GitHub. By deploying as a **Static Site**, your app is served completely free with automatic global CDN delivery and instant caching.

Follow this step-by-step configuration layout to spin up the **Water Suite PWA** as a **Render Static Site**:

### Step 1: Connect your Repository
1. Log in to your account at [dashboard.render.com](https://dashboard.render.com).
2. Click the **"New +"** button in the dashboard and select **"Static Site"**.
3. Link your GitHub or GitLab account and choose this active project repository.

### Step 2: Configure Static Site Settings
Under the Static Site creation panel, set the following parameters:

| Setting Field | Configuration Value |
| :--- | :--- |
| **Name** | `water-suite-pwa` (or any custom name) |
| **Branch** | `main` |
| **Build Command** | `bun install && bun run build` |
| **Publish Directory** | `dist` |

### Step 3: Setup Environment Variables (Optional)
If you need to customize any build flags, you can add them in the **Environment** tab, but none are strictly required for compilation.

### Step 4: Provision & Test
Click **"Create Static Site"**. Render will pull your repository, execute ultra-fast `bun install`, compile the production bundles to the `dist` directory using `bun run build`, and host the assets on Render's global CDN.

Once deployed:
1. Open the provided `.onrender.com` URL.
2. Install the application on your smartphone or desktop using the browser's built-in **"Add to Home Screen / Install"** prompt.
3. Turn off your Wi-Fi or go offline — the platform will continue running beautifully without an internet connection!

---

## 📱 Mobile Shell & Native Wrappers
The layout utilizes zero custom core DOM-restricted hacks. It behaves predictably with full responsiveness, allowing it to easily bind inside native frameworks like **React Native WebView** or **Flutter WebViews** for seamless mobile App Store publishing.

---

*Designed and engineered in alignment with the physical and cognitive advancement of the planetary consciousness. Build the Future. Build with Water.*
