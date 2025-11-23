# Deployment Guide - Codejitsu Website

## GitHub Repository
✅ **Repository Created**: https://github.com/ikanc/codejitsu-website

## Cloudflare Pages Deployment

### Option 1: Connect GitHub to Cloudflare Pages (Recommended)

1. **Log in to Cloudflare Dashboard**
   - Go to https://dash.cloudflare.com/
   - Navigate to **Workers & Pages**

2. **Create a New Project**
   - Click **"Create Application"**
   - Select **"Pages"** tab
   - Click **"Connect to Git"**

3. **Connect Your Repository**
   - Authorize Cloudflare to access your GitHub account
   - Select repository: `ikanc/codejitsu-website`
   - Click **"Begin setup"**

4. **Configure Build Settings**
   ```
   Project name: codejitsu-website (or codejitsu)
   Production branch: main
   Build command: npm run build
   Build output directory: dist
   ```

5. **Deploy**
   - Click **"Save and Deploy"**
   - Cloudflare will automatically build and deploy your site
   - Every push to `main` will trigger automatic deployment

6. **Custom Domain Setup**
   - After deployment, go to **Custom domains**
   - Click **"Set up a custom domain"**
   - Enter: `codejitsu.ca`
   - Follow DNS configuration instructions
   - Add www subdomain if needed

---

### Option 2: Deploy via Wrangler CLI

If you prefer using Wrangler locally:

1. **Install Wrangler Globally** (if not already installed)
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**
   ```bash
   wrangler login
   ```

3. **Build the Project**
   ```bash
   npm run build
   ```

4. **Deploy**
   ```bash
   wrangler pages deploy dist --project-name=codejitsu-website
   ```

   On first run, it will create a new Pages project.

5. **Subsequent Deployments**
   ```bash
   npm run build && wrangler pages deploy dist
   ```

---

## Domain Configuration

### DNS Settings for codejitsu.ca

Once your Cloudflare Pages project is created, you'll get a URL like:
- `codejitsu-website.pages.dev`

To use your custom domain `codejitsu.ca`:

1. **In Cloudflare Pages Dashboard**:
   - Go to your project → **Custom domains**
   - Add `codejitsu.ca` and `www.codejitsu.ca`

2. **Update DNS Records** (if domain is on Cloudflare):
   - Cloudflare will automatically configure DNS
   - Verify the CNAME records point to your Pages project

3. **If domain is elsewhere**:
   - Add CNAME record: `codejitsu.ca` → `codejitsu-website.pages.dev`
   - Add CNAME record: `www.codejitsu.ca` → `codejitsu-website.pages.dev`

---

## Environment Variables

Currently, the site doesn't use environment variables. If you need to add them later:

1. Go to **Settings** → **Environment variables**
2. Add variables for Production/Preview
3. Rebuild the project

---

## Build Output

Current build stats:
- **Total Size**: ~250 KB (gzipped)
- **Chunks**:
  - react-vendor: 56.18 KB (gzip)
  - index: 7.62 KB (gzip)
  - anime: 7.01 KB (gzip)
  - helmet: 5.18 KB (gzip)
  - CSS: 3.88 KB (gzip)

All assets are compressed with both gzip and brotli.

---

## Performance Optimizations Included

✅ Code splitting (React vendor, Helmet, Anime.js)
✅ Gzip compression
✅ Brotli compression
✅ Minification (Terser)
✅ CSS code splitting
✅ Tree shaking
✅ Console logs removed in production

---

## Continuous Deployment

With GitHub connected to Cloudflare Pages:

1. **Push to main branch**
   ```bash
   git add .
   git commit -m "Your changes"
   git push
   ```

2. **Automatic Build & Deploy**
   - Cloudflare automatically detects the push
   - Builds the project
   - Deploys to production
   - Updates your domain

3. **Preview Deployments**
   - Pull requests create preview deployments
   - Each PR gets its own URL for testing

---

## Monitoring & Analytics

### Enable Web Analytics
1. Go to Cloudflare Pages dashboard
2. Navigate to **Analytics**
3. Enable **Web Analytics**
4. Add provided script to `index.html` (optional)

### Performance Monitoring
- View build logs in Cloudflare dashboard
- Check deployment history
- Monitor page views and performance metrics

---

## Rollback

To rollback to a previous version:

1. Go to **Deployments** in Cloudflare Pages
2. Find the deployment you want to rollback to
3. Click **"Rollback to this deployment"**

Or use Git:
```bash
git revert <commit-hash>
git push
```

---

## Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Ensure all dependencies are installed: `npm install`
- Check build logs in Cloudflare dashboard

### Images Not Showing
- Verify images are in `/public/assets/images/`
- Check paths start with `/assets/` not `../assets/`
- Ensure images are committed to Git

### Custom Domain Not Working
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Check SSL certificate status in Cloudflare

### Performance Issues
- Run Lighthouse audit
- Check bundle size: `npm run build`
- Verify compression is working (check Network tab)

---

## Next Steps

1. ✅ Repository created and pushed to GitHub
2. ⏳ Connect to Cloudflare Pages
3. ⏳ Configure custom domain (codejitsu.ca)
4. ⏳ Enable SSL (automatic with Cloudflare)
5. ⏳ Test deployment
6. ⏳ Set up analytics
7. ⏳ Go live!

---

## Support

- Cloudflare Pages Docs: https://developers.cloudflare.com/pages/
- Wrangler Docs: https://developers.cloudflare.com/workers/wrangler/
- GitHub Repository: https://github.com/ikanc/codejitsu-website

---

**Ready to deploy!** 🚀

Choose Option 1 (GitHub integration) for the easiest setup with automatic deployments.
