import type { Metadata } from "next";

const SITE_URL = "https://jponders.legitcreations.com.ng";

const CTO_DOSSIER_URL =
  `${SITE_URL}/dossier/digital-integration`;

// Replace this with the exact CTO photograph URL from Vercel Blob Storage.
const CTO_OG_IMAGE =
  "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/xxxxxxxxxxxx.jpg";

export const ctoDossierMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: "Digital Integration | CTO Dossier | Julio Ponder Seneres",

  description:
    "Public institutional CTO dossier for Julio Ponder Seneres covering digital integration, financial infrastructure, cybersecurity, data systems, technology governance, and digital sovereignty.",

  keywords: [
    "Julio Ponder Seneres",
    "Julio Ponder",
    "CTO dossier",
    "Chief Technology Officer",
    "Digital Integration",
    "Digital Sovereignty",
    "Financial Infrastructure",
    "Cybersecurity",
    "Technology Governance",
    "Data Infrastructure",
    "Contra Atlantis Group",
  ],

  authors: [
    {
      name: "Contra Atlantis Group",
    },
  ],

  creator: "Contra Atlantis Group",
  publisher: "Contra Atlantis Group",

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
      "Digital Integration | CTO Dossier | Julio Ponder Seneres",

    description:
      "Public institutional CTO dossier covering digital infrastructure, cybersecurity, data systems, technology governance, and digital sovereignty.",

    images: [
      {
        url: CTO_OG_IMAGE,

        alt:
          "Julio Ponder Seneres — Digital Integration CTO Dossier",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Digital Integration | CTO Dossier | Julio Ponder Seneres",

    description:
      "Public institutional CTO dossier covering digital integration, infrastructure, cybersecurity, data systems, and technology governance.",

    images: [CTO_OG_IMAGE],
  },
};