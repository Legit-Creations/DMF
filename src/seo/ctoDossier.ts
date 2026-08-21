import type { Metadata } from "next";

const SITE_URL = "https://jponders.legitcreations.com.ng";

const CTO_DOSSIER_URL =
  `${SITE_URL}/dossier/digital-integration`;

// Dedicated CTO Open Graph image.
// Recommended: 1200 × 630 PNG, JPG, or WebP.
const CTO_OG_IMAGE =
  "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/opengraph.png";

export const ctoMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    absolute:
      "Digital Integration | CTO Dossier | Julio Ponder Seneres",
  },

  description:
    "Public institutional CTO dossier for Julio Ponder Seneres covering digital integration, financial infrastructure, cybersecurity, data systems, technology governance, and digital sovereignty.",

  keywords: [
    "Julio Ponder Seneres",
    "Julio Ponder",
    "Julio Ponder Seneres CTO",
    "Chief Technology Officer",
    "CTO Dossier",
    "Digital Integration",
    "Digital Infrastructure",
    "Digital Sovereignty",
    "Financial Infrastructure",
    "Financial Technology",
    "Cybersecurity",
    "Technology Governance",
    "Data Infrastructure",
    "Data Systems",
    "Digital Governance",
    "Contra Atlantis Group",
  ],

  authors: [
    {
      name: "Contra Atlantis Group",
      url: SITE_URL,
    },
  ],

  creator: "Contra Atlantis Group",
  publisher: "Contra Atlantis Group",

  category: "Technology",

  alternates: {
    canonical: CTO_DOSSIER_URL,
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "profile",

    url: CTO_DOSSIER_URL,

    siteName: "Contra Atlantis Group",

    locale: "en_US",

    title:
      "Julio Ponder Seneres | CTO — Digital Integration Dossier",

    description:
      "Public institutional CTO dossier covering digital infrastructure, cybersecurity, data systems, technology governance, and digital sovereignty.",

    images: [
      {
        url: CTO_OG_IMAGE,
        width: 1200,
        height: 630,
        type: "image/png",
        alt:
          "Julio Ponder Seneres — Digital Integration CTO Dossier",
      },
    ],

    // Profile-specific Open Graph metadata.
    type: "profile",
    firstName: "Julio",
    lastName: "Ponder Seneres",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Digital Integration | CTO Dossier | Julio Ponder Seneres",

    description:
      "Public institutional CTO dossier covering digital integration, infrastructure, cybersecurity, data systems, and technology governance.",

    images: [
      {
        url: CTO_OG_IMAGE,
        width: 1200,
        height: 630,
        alt:
          "Julio Ponder Seneres — Digital Integration CTO Dossier",
      },
    ],
  },
};