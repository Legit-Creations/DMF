import type { Metadata } from 'next';

export const ctoDossierMetadata: Metadata = {
  title: 'Digital Integration | CTO Dossier | Julio Ponder Seneres',

  description:
    'The public institutional CTO dossier for Julio Ponder Seneres, documenting digital integration, financial infrastructure, cybersecurity, data systems, technology governance, and digital sovereignty.',

  keywords: [
    'Julio Ponder Seneres',
    'Julio Ponder',
    'CTO dossier',
    'Chief Technology Officer',
    'Digital Integration',
    'Digital Sovereignty',
    'financial infrastructure',
    'cybersecurity',
    'technology governance',
    'data infrastructure',
    'Contra Atlantis Group',
  ],

  authors: [
    {
      name: 'Contra Atlantis Group',
    },
  ],

  creator: 'Contra Atlantis Group',
  publisher: 'Contra Atlantis Group',

  alternates: {
    canonical:
      'https://jponders.legitcreations.com.ng/dossier/digital-integration',
  },

  openGraph: {
    type: 'website',

    title:
      'Digital Integration | CTO Dossier | Julio Ponder Seneres',

    description:
      'Public institutional CTO dossier documenting digital infrastructure, cybersecurity, data systems, technology governance, and digital sovereignty.',

    url:
      'https://jponders.legitcreations.com.ng/dossier/digital-integration',

    siteName: 'Julio Ponder Seneres',

    locale: 'en_US',

    images: [
      {
        url:
          'https://jponders.legitcreations.com.ng/og/cto-dossier.jpg',

        width: 1200,
        height: 630,

        alt:
          'Julio Ponder Seneres — Digital Integration CTO Dossier',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Digital Integration | CTO Dossier | Julio Ponder Seneres',

    description:
      'Public institutional CTO dossier covering digital integration, infrastructure, cybersecurity, data systems, and technology governance.',

    images: [
      'https://jponders.legitcreations.com.ng/og/cto-dossier.jpg',
    ],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};