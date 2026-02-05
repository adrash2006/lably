# Deployment Guide for Virtual Lab App

## 1. Build the Project
Since this is a React + Vite project, you need to "build" it to create the static files that browsers can understand.

Open your terminal (Command Prompt or PowerShell) in the project folder and run:

```bash
npm run build
```

## 2. Locate the Output
Once the command finishes successfully, a new folder named **`dist`** will appear in your project directory.

This `dist` folder contains everything you need:
- `index.html` (The main entry point)
- `assets/` (Folder containing all your JavaScript, CSS, and Images)
- `vite.svg` (Favicon)

## 3. Upload to Hosting
To deploy, you simply need to upload the **contents** of the `dist` folder to your hosting provider's public directory (often called `public_html`, `www`, or `htdocs`).

**Do NOT upload the entire project folder.** Only upload the files *inside* `dist`.

### Checklist:
- [ ] Run `npm run build`
- [ ] Open the new `dist` folder
- [ ] Upload `index.html` and the `assets` folder to your server.

## Troubleshooting
- If you see a blank page, ensure your hosting supports "Single Page Applications" (SPA) or simply relies on `index.html`.
- If assets don't load, ensure all files from `assets/` were uploaded correctly.
