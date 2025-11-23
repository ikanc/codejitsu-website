# Site Generation Guidelines

## Purpose
This document provides comprehensive guidelines for generating a complete, production-ready static website in one execution cycle. Following these guidelines ensures SEO optimization, performance, accessibility, and minimal errors.

---

## 1. Input Requirements (`site-description.md`)

The `site-description.md` file MUST contain the following sections:

### Required Fields
```markdown
# Site Information
- **Site Name**: [Company/Product Name]
- **Domain**: [example.com]
- **Primary Language**: [en/fr/he/etc.]
- **Theme Color**: [#hexcode]
- **Description**: [Brief 1-2 sentence description]

# Contact Information
- **Email**: [contact@example.com]
- **Phone**: [Optional]
- **Address**: [City, State/Province, Country]
- **Social Media**: [Optional - Twitter, LinkedIn, etc.]

# Pages
## Home
- **Title**: [SEO optimized title, max 60 chars]
- **Meta Description**: [SEO optimized description, 150-160 chars]
- **Hero Heading**: [Main heading]
- **Hero Subheading**: [Supporting text]
- **Sections**: [List of sections with content]

## [Additional Pages]
[Repeat structure for each page]

# Content Sections
[Detailed content for each section: services, features, team, etc.]

# Brand Assets
- **Logo**: [Path or description]
- **Images**: [List of images needed with dimensions]
- **Color Palette**: [Primary, secondary, accent colors]

# Features Required
- [ ] Contact Form
- [ ] Newsletter Signup
- [ ] Blog
- [ ] Multi-language Support
- [ ] Animation Requirements
- [ ] Third-party Integrations (Analytics, CRM, etc.)
```

---

## 2. Project Structure

### Standard Directory Layout
```
project-root/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── og-image.jpg (1200x630px, <300KB)
│   │   │   ├── logo.svg or logo.png
│   │   │   └── favicon.svg
│   │   └── icons/
│   ├── robots.txt
│   └── sitemap.xml (if static, otherwise generate)
├── src/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── SEO.tsx (MUST HAVE)
│   │   └── [feature-specific components]
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── [other pages].tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
├── wrangler.toml
├── .gitignore
└── README.md
```

---

## 3. SEO Requirements (CRITICAL)

### 3.1 Meta Tags (Every Page MUST Have)
```html
<!-- Basic Meta Tags -->
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>[Page Title | Site Name] (Max 60 characters)</title>
<meta name="description" content="[150-160 characters]" />
<meta name="keywords" content="[relevant, keywords, comma, separated]" />
<meta name="author" content="[Company Name]" />
<meta name="robots" content="index, follow" />

<!-- Open Graph (REQUIRED) -->
<meta property="og:type" content="website" />
<meta property="og:url" content="[full URL]" />
<meta property="og:title" content="[Page Title]" />
<meta property="og:description" content="[Description]" />
<meta property="og:image" content="[https://domain.com/og-image.jpg]" />
<meta property="og:site_name" content="[Site Name]" />
<meta property="og:locale" content="[en_US/fr_CA/he_IL]" />

<!-- Twitter Card (REQUIRED) -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="[full URL]" />
<meta name="twitter:title" content="[Page Title]" />
<meta name="twitter:description" content="[Description]" />
<meta name="twitter:image" content="[https://domain.com/og-image.jpg]" />

<!-- Canonical (REQUIRED) -->
<link rel="canonical" href="[full URL]" />

<!-- Theme Color -->
<meta name="theme-color" content="[brand color]" />
```

### 3.2 Favicon Requirements
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="alternate icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
```

### 3.3 JSON-LD Structured Data (Homepage)
```typescript
// For business/organization sites
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization", // or "LocalBusiness", "Restaurant", etc.
  "@id": siteUrl,
  "name": "Company Name",
  "alternateName": "Alt Name",
  "description": "Description",
  "url": siteUrl,
  "email": "contact@domain.com",
  "telephone": "+1-XXX-XXX-XXXX",
  "logo": `${siteUrl}/logo.svg`,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Street",
    "addressLocality": "City",
    "addressRegion": "State/Province",
    "postalCode": "12345",
    "addressCountry": "CA"
  },
  "sameAs": [
    "https://twitter.com/handle",
    "https://linkedin.com/company/name"
  ]
};
```

### 3.4 SEO Component Template
MUST create a reusable SEO component using `react-helmet-async`:
- Accept props: title, description, path, image
- Generate all meta tags dynamically
- Include JSON-LD structured data for homepage
- Handle canonical URLs correctly
- Support multi-language if needed

---

## 4. Performance Optimization (REQUIRED)

### 4.1 Vite Configuration
```typescript
// vite.config.ts MUST include:
- Code splitting (manual chunks for react-vendor, helmet, anime, etc.)
- Compression plugins (gzip + brotli)
- Minification (terser with drop_console, drop_debugger)
- CSS code splitting
- Chunk size warning limit (1000KB)
```

### 4.2 Image Optimization
- Use WebP/AVIF when possible, with JPG/PNG fallbacks
- OG images: 1200x630px, <300KB
- Logo: SVG preferred
- Lazy load images below the fold
- Use `loading="lazy"` attribute
- Provide proper alt text for all images

### 4.3 Performance Hints
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="dns-prefetch" href="https://api.domain.com" />
```

---

## 5. Code Standards

### 5.1 TypeScript Configuration
- Strict mode ALWAYS enabled
- No unused locals/parameters
- No fallthrough cases in switch

### 5.2 React Best Practices
- Use functional components with hooks
- Proper cleanup in useEffect
- Memoization for expensive computations
- Avoid inline function definitions in render

### 5.3 File Naming Conventions
- Components: PascalCase.tsx (e.g., Navigation.tsx)
- Pages: PascalCase.tsx (e.g., Home.tsx)
- Utilities: camelCase.ts
- CSS: kebab-case.css or module.css

### 5.4 Component Structure
```typescript
// Standard component template
import { useEffect, useState } from 'react';
import { SEO } from '../components/SEO';

export function PageName() {
  // 1. State declarations
  const [state, setState] = useState();

  // 2. Effects
  useEffect(() => {
    // Logic
    return () => {
      // Cleanup
    };
  }, [dependencies]);

  // 3. Event handlers
  const handleEvent = () => {};

  // 4. Render
  return (
    <>
      <SEO
        title="Page Title"
        description="Page description"
        path="/page-path"
      />
      {/* Content */}
    </>
  );
}
```

---

## 6. Styling Standards

### 6.1 Tailwind CSS
- Utility-first approach
- Use theme values in tailwind.config.js
- No inline styles (use Tailwind classes)
- Responsive classes: mobile-first (sm:, md:, lg:, xl:)

### 6.2 Color Palette
- Define in tailwind.config.js
- Primary, secondary, accent colors
- Consistent use of opacity variants

### 6.3 Typography
- Define font families in tailwind.config.js
- Use semantic heading hierarchy (h1 → h6)
- Consistent font sizes via Tailwind scale

---

## 7. Animation Standards

### 7.1 Using anime.js
- Import: `import anime from 'animejs'`
- Use easing functions: 'easeOutExpo', 'easeInOutQuad'
- Stagger animations for lists
- Use Intersection Observer for scroll-triggered animations
- Clean up animations on unmount

### 7.2 Performance
- Animate transform and opacity only (GPU accelerated)
- Avoid animating layout properties
- Use `will-change` sparingly

---

## 8. Forms Standards

### 8.1 Form Structure
- Use semantic HTML form elements
- Proper label associations (htmlFor/id)
- Client-side validation with HTML5
- Error state handling
- Loading states during submission
- Success/error messages

### 8.2 Accessibility
- All inputs MUST have labels
- Use proper input types (email, tel, etc.)
- Include placeholder text
- Focus states clearly visible
- Keyboard navigation support

---

## 9. Responsive Design

### 9.1 Breakpoints (Tailwind defaults)
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

### 9.2 Mobile-First
- Start with mobile layout
- Add complexity with breakpoints
- Test on actual devices
- Touch targets minimum 44x44px

---

## 10. Accessibility (WCAG 2.1 AA)

### 10.1 Requirements
- Semantic HTML elements
- Proper heading hierarchy
- Alt text for all images
- ARIA labels where needed
- Keyboard navigation
- Focus indicators
- Color contrast ratio ≥4.5:1 (text)
- Skip to main content link

### 10.2 Testing
- Test with keyboard only
- Test with screen reader
- Check color contrast
- Verify focus order

---

## 11. Navigation & Routing

### 11.1 Structure
- React Router for client-side routing
- Clear, semantic URLs
- Active link indication
- Mobile menu for small screens
- Sticky/fixed navigation option

### 11.2 Best Practices
- Keep navigation consistent across pages
- Max 7±2 menu items
- Breadcrumbs for deep hierarchies
- Search functionality for content-heavy sites

---

## 12. Footer Standards

### 12.1 Required Content
- Copyright notice with current year
- Company name
- Contact information
- Quick links to main pages
- Social media links (if provided)
- Privacy policy / Terms of Service links

---

## 13. Error Handling

### 13.1 404 Page
- Must exist
- Friendly message
- Link back to home
- Navigation included

### 13.2 Form Errors
- Clear error messages
- Field-level validation
- Prevent submission of invalid forms

---

## 14. Deployment (Cloudflare Pages)

### 14.1 Wrangler Configuration
```toml
name = "project-name"
pages_build_output_dir = "dist"
```

### 14.2 Build Commands
- Build: `npm run build`
- Preview: `npm run preview`
- Deploy: `wrangler pages deploy dist`

### 14.3 Environment Variables
- Never commit secrets
- Use .env files (gitignored)
- Configure in Cloudflare dashboard

---

## 15. Testing Checklist

Before considering the site complete, verify:

### SEO
- [ ] All pages have unique titles
- [ ] All pages have unique meta descriptions
- [ ] OG tags present on all pages
- [ ] Twitter Card tags present
- [ ] Canonical URLs correct
- [ ] JSON-LD structured data on homepage
- [ ] Sitemap.xml exists
- [ ] Robots.txt exists
- [ ] Favicon loads correctly

### Performance
- [ ] Images optimized (<100KB each)
- [ ] Build creates gzip/brotli files
- [ ] Bundle size reasonable (<500KB initial)
- [ ] No console errors
- [ ] Lighthouse score >90

### Functionality
- [ ] All links work
- [ ] Forms validate correctly
- [ ] Forms submit successfully
- [ ] Navigation works on mobile
- [ ] Animations run smoothly
- [ ] No TypeScript errors
- [ ] No ESLint errors

### Responsive
- [ ] Mobile (375px)
- [ ] Tablet (768px)
- [ ] Desktop (1440px)
- [ ] Large desktop (1920px)

### Accessibility
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Alt text on all images
- [ ] Color contrast passes
- [ ] Semantic HTML used

### Browser Testing
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

---

## 16. Documentation

### 16.1 README.md Must Include
- Project description
- Tech stack
- Installation instructions
- Development commands
- Build commands
- Deployment instructions
- Project structure
- Customization guide
- Contact information

---

## 17. Dependencies

### 17.1 Required
```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-helmet-async": "^2.0.5",
    "react-router-dom": "^7.9.4"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "vite": "^5.4.2",
    "vite-plugin-compression": "^0.5.1"
  }
}
```

### 17.2 Optional (Based on Requirements)
- animejs: Animations
- lucide-react: Icons
- @supabase/supabase-js: Backend integration

---

## 18. Common Pitfalls to Avoid

1. **Missing Meta Tags**: Always include ALL required meta tags
2. **Hardcoded URLs**: Use dynamic paths and domain from config
3. **Missing Alt Text**: Every image needs descriptive alt text
4. **Poor Contrast**: Check color contrast ratios
5. **Non-semantic HTML**: Use proper elements (nav, header, main, footer)
6. **Missing Error States**: Forms need error handling
7. **No Loading States**: Show feedback during async operations
8. **Broken Links**: Test all internal and external links
9. **Missing Favicon**: Always include favicon
10. **Console Logs**: Remove in production (terser config)
11. **Large Images**: Optimize all images before deployment
12. **Missing Canonical**: Every page needs canonical URL
13. **Wrong OG Image Size**: Must be 1200x630px
14. **Missing Structured Data**: Homepage needs JSON-LD
15. **Non-responsive**: Test on all breakpoints

---

## 19. Quality Assurance Process

### Before Generation Starts
1. Read site-description.md completely
2. Verify all required fields present
3. Clarify ambiguities (if interactive)
4. Plan component structure

### During Generation
1. Generate files in dependency order
2. Use consistent naming conventions
3. Follow templates exactly
4. Double-check all URLs and paths
5. Validate all required sections present

### After Generation
1. Run type check: `npm run typecheck`
2. Run linter: `npm run lint`
3. Build project: `npm run build`
4. Check build output size
5. Test dev server: `npm run dev`
6. Manual visual inspection
7. Test all interactive elements
8. Verify SEO tags in browser inspector

---

## 20. Output Deliverables

After generation, the following MUST be provided:

1. **Complete project files** (all in correct locations)
2. **README.md** with setup instructions
3. **Summary document** listing:
   - Pages created
   - Components created
   - Features implemented
   - Any missing images/content (placeholders used)
   - Next steps (e.g., "Add images to /public/assets/images/")
   - Deployment instructions

---

## 21. Example Site-Description.md Template

Save this next to the guidelines as `site-description.template.md`:

```markdown
# Site Information
- **Site Name**: Example Company
- **Domain**: example.com
- **Primary Language**: en
- **Theme Color**: #0ea5e9
- **Description**: Brief description of what the company does

# Contact Information
- **Email**: hello@example.com
- **Phone**: +1-555-555-5555 (optional)
- **Address**: City, State, Country
- **Social Media**:
  - Twitter: https://twitter.com/handle
  - LinkedIn: https://linkedin.com/company/name

# Pages

## Home
- **Title**: Example Company | Tagline
- **Meta Description**: SEO-optimized description of services/products (150-160 chars)
- **Hero Heading**: Main Value Proposition
- **Hero Subheading**: Supporting text explaining what you do
- **CTA Text**: Get Started / Contact Us / Learn More
- **CTA Link**: /contact or /signup

### Sections
1. **Services/Features**
   - Service 1: Title + Description
   - Service 2: Title + Description
   - Service 3: Title + Description

2. **Social Proof**
   - Client logos: Company1, Company2, Company3
   - Testimonials (optional)

3. **CTA Section**
   - Heading: Ready to Get Started?
   - Text: Supporting message
   - Button: Contact Us

## About (optional)
- **Title**: About Us | Example Company
- **Meta Description**: Learn about our story, mission, and team
- **Content**: [Full content here]

## Services/Products
- **Title**: Our Services | Example Company
- **Meta Description**: Explore our range of services/products
- **Content**: [List all services with descriptions]

## Contact
- **Title**: Contact Us | Example Company
- **Meta Description**: Get in touch with our team
- **Form Fields**: Name, Email, Subject, Message
- **Additional Content**: Office hours, address, map embed link

# Brand Assets
- **Logo**: Path to logo file or "to be provided"
- **Primary Color**: #hexcode
- **Secondary Color**: #hexcode
- **Accent Color**: #hexcode
- **Font**: Font family name or "default"
- **Images Needed**:
  - OG Image (1200x630px)
  - Hero background (1920x1080px)
  - Service icons (optional)

# Features Required
- [x] Contact Form
- [ ] Newsletter Signup
- [ ] Blog
- [ ] Multi-language Support
- [x] Smooth Animations
- [ ] Analytics Integration (Google Analytics)
- [ ] Live Chat

# Additional Notes
Any specific requirements, preferences, or constraints.
```

---

## Summary

Following these guidelines ensures:
✅ SEO-optimized pages with all required meta tags
✅ Performance-optimized builds
✅ Accessible, responsive design
✅ Clean, maintainable code
✅ Production-ready deployment configuration
✅ Minimal errors and rework cycles
✅ Consistent quality across all generated sites

**Key Principle**: When in doubt, refer to the codejitsu.ca and wingz.co.il implementations as reference examples.
