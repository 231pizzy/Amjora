import { SITE } from '@/components/ui/SEO'

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Amjora',
  legalName: 'Amjora Forge Limited',
  url: SITE.url,
  logo: `${SITE.url}/favicon.svg`,
  slogan: 'Finding Ways.',
  description:
    'Amjora is a technology company that builds trusted software, payment infrastructure and AI solutions that improve lives and power businesses.',
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Amjora',
  url: SITE.url,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE.url}/insights?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

export function articleSchema({ title, description, path, date }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: date,
    author: {
      '@type': 'Organization',
      name: 'Amjora',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Amjora',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE.url}/favicon.svg`,
      },
    },
    mainEntityOfPage: `${SITE.url}${path}`,
  }
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  }
}
