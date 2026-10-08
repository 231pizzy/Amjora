// Generated aurora-mesh background images (Midnight Blue base, Electric Cyan /
// violet / amber glow) — one composition per page so hero sections stop
// looking like a single repeated flat panel. See public/images/hero/.

export const heroImages = {
  home: '/images/hero/mesh-home.webp',
  about: '/images/hero/mesh-about.webp',
  solutions: '/images/hero/mesh-solutions.webp',
  products: '/images/hero/mesh-products.webp',
  engineering: '/images/hero/mesh-engineering.webp',
  careers: '/images/hero/mesh-careers.webp',
  insights: '/images/hero/mesh-insights.webp',
  contact: '/images/hero/mesh-contact.webp',
  legal: '/images/hero/mesh-legal.webp',
  notfound: '/images/hero/mesh-notfound.webp',
  'product-platform': '/images/hero/mesh-product-platform.webp',
  'product-payments': '/images/hero/mesh-product-payments.webp',
  'product-ai': '/images/hero/mesh-product-ai.webp',
  'product-cloud': '/images/hero/mesh-product-cloud.webp',
  'product-health': '/images/hero/mesh-product-health.webp',
  'product-labs': '/images/hero/mesh-product-labs.webp',
}

export const getHeroImage = (key) => heroImages[key] || heroImages.about
