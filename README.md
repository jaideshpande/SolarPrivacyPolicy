# Privacy Policy – Western PA Solar Installation

## Get a working URL on Vercel (no build)

Use the **static** version so Vercel only serves HTML—no Node, no build, no 404s.

1. Go to **[vercel.com](https://vercel.com)** → your project → **Settings** → **General**.
2. Set **Root Directory** to: `static`  
   (Click “Edit”, enter `static`, save.)
3. Set **Framework Preset** to: **Other**  
   (So Vercel does not run a Next.js build.)
4. Leave **Build Command** and **Output Directory** empty.
5. Go to **Deployments** → **Redeploy** the latest deployment.

Your privacy policy will be at `https://your-project.vercel.app`.

To change the policy later: edit `static/index.html`, commit, and push. Vercel will redeploy automatically.

---

The `app/` folder is the Next.js version (for local `npm run dev`). The live site uses only `static/index.html`.
