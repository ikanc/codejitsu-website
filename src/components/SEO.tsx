import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export function SEO({ title, description, path, image = '/og-image.jpg' }: SEOProps) {
  const siteName = 'Codejitsu Development Studio';
  const siteUrl = 'https://codejitsu.ca';
  const fullUrl = `${siteUrl}${path}`;
  const fullTitle = path === '/' ? title : `${title} | ${siteName}`;
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  // Structured Data (JSON-LD) for Organization - only on homepage
  const isHomePage = path === '/';
  const structuredData = isHomePage ? {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": siteUrl,
    "name": "Codejitsu Development Studio Ltd",
    "alternateName": "Codejitsu",
    "description": "Software Development Dojo specializing in web development, bug fighting, and code optimization",
    "url": siteUrl,
    "email": "contact@codejitsu.ca",
    "logo": `${siteUrl}/logo.svg`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Langley",
      "addressRegion": "BC",
      "addressCountry": "CA"
    },
    "sameAs": [],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "contact@codejitsu.ca"
    }
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_CA" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
