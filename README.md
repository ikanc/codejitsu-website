# Codejitsu Development Studio Website

Modern, performant website built with React, TypeScript, and Tailwind CSS. Deployed on Cloudflare Pages.

## Features

- **Modern Stack**: React 18 + TypeScript + Vite + Tailwind CSS
- **Animations**: Smooth anime.js animations
- **SEO Optimized**: react-helmet-async with comprehensive meta tags and structured data
- **Performance**: Code splitting, compression (gzip/brotli), optimized builds
- **Responsive**: Mobile-first design
- **Cloudflare Ready**: Configured for Cloudflare Pages deployment

## Project Structure

```
codejitsu/
├── src/
│   ├── components/     # Reusable components (Navigation, Footer, SEO)
│   ├── pages/         # Page components (Home, Projects, Contact)
│   ├── App.tsx        # Main app component with routing
│   ├── main.tsx       # Entry point
│   └── index.css      # Global styles
├── public/            # Static assets
├── index.html         # HTML template
├── vite.config.ts     # Vite configuration
├── wrangler.toml      # Cloudflare Pages configuration
└── package.json       # Dependencies and scripts
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run typecheck

# Lint
npm run lint
```

## Deployment to Cloudflare Pages

1. Connect your Git repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy!

Alternatively, use Wrangler CLI:

```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
wrangler pages deploy dist --project-name=codejitsu-website
```

## Pages

- **Home** (`/`) - Hero section, services showcase, client logos
- **Our Projects** (`/projects`) - Portfolio showcase
- **Let's Talk** (`/contact`) - Contact information and meeting scheduler

## SEO

Each page includes:
- Optimized meta tags
- Open Graph tags for social sharing
- Twitter Card tags
- Canonical URLs
- JSON-LD structured data (homepage)

## Customization

### Colors

Edit `tailwind.config.js` to change the primary color scheme.

### Content

- **Home page**: Edit `src/pages/Home.tsx`
- **Projects**: Update the projects array in `src/pages/Projects.tsx`
- **Contact**: Modify `src/pages/Contact.tsx` and add your Calendly embed

### Calendly Integration

Replace the placeholder in `src/pages/Contact.tsx` with your Calendly embed code.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS
- **React Router** - Client-side routing
- **anime.js** - Animation library
- **react-helmet-async** - SEO meta tags
- **Lucide React** - Icon library
- **Cloudflare Pages** - Hosting and deployment

## License

© 2024 Codejitsu Development Studio Ltd. All rights reserved.
