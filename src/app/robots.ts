import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://jponders.legitcreations.com.ng';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'], 
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}