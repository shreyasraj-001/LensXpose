# LensXpose: Vercel Deployment Map

This guide provides the exact, step-by-step blueprint to successfully deploy the LensXpose Design System (Vite + React + Tailwind v4) to production on Vercel.

## 1. Project Prerequisites

Before importing the project into Vercel, ensure your code is pushed to a remote Git repository (GitHub, GitLab, or Bitbucket).

Vercel relies on the `package.json` configurations we established. Your project uses:
* **Framework:** Vite
* **Language:** TypeScript & React
* **Styling:** Tailwind CSS v4

## 2. Importing the Project on Vercel

1. Log in to your [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **Add New...** and select **Project**.
3. Import your LensXpose Git repository.

## 3. Configuration & Build Commands

When configuring the project on Vercel, use the following exact settings:

* **Framework Preset:** `Vite`
* **Root Directory:** `./` (Leave as default unless your code is in a subfolder)

### Build Settings
Vercel should automatically detect Vite, but explicitly verify these are the commands configured:

* **Build Command:** 
  ```bash
  npm run build
  ```
  *(This triggers `tsc -b && vite build` behind the scenes to compile TypeScript and bundle the assets).*

* **Output Directory:** 
  ```bash
  dist
  ```
  *(Vite places all compiled, production-ready static files into the `dist` folder).*

* **Install Command:** 
  ```bash
  npm install
  ```

## 4. Environment Variables

Your architecture uses dynamic imports for the Sanity CMS client to handle production environments safely. You **must** define these environment variables in Vercel before hitting Deploy.

Under the **Environment Variables** section in Vercel, add the following:

| Name | Value | Environment |
| :--- | :--- | :--- |
| `VITE_SANITY_PROJECT_ID` | `your-sanity-project-id` | Production, Preview, Development |
| `VITE_SANITY_DATASET` | `production` | Production, Preview, Development |

> [!WARNING]
> Because Vite is being used, all frontend environment variables **must** be prefixed with `VITE_`. Vercel injects these during the `npm run build` process.

## 5. Deployment Execution

1. Once the settings and environment variables are locked in, click **Deploy**.
2. Vercel will run the `npm install` phase, followed by the `npm run build` phase.
3. Because we fixed the Tailwind v4 compilation pipeline, the CSS will bundle correctly without any 500 internal errors.

## 6. Post-Deployment Checks

After the deployment finishes and gives you a `*.vercel.app` URL, verify the following:

1. **Verify Root Padding:** Ensure the custom reset fix we applied is working and components like `Featured Work` and `Trusted Logos` are not overlapping.
2. **Check the Network Tab:** Verify that the `index-[hash].css` file loads properly without 404s.
3. **Test Scroll Behavior:** Confirm the custom scrollbar and smooth-scrolling behaviors persist in the production build.
