import type { Metadata } from "next";

const SITE_URL = "https://jponders.legitcreations.com.ng";

const CONTACT_URL = `${SITE_URL}/contact`;

// Use the verified Open Graph image from Vercel Blob Storage.
const CONTACT_OG_IMAGE =
  "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/opengraph.png";

export const contactMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    absolute: "Contact | Contra Atlantis Group",
  },

  description:
    "Contact Contra Atlantis Group for business inquiries, partnerships, digital integration, investment opportunities, and general correspondence.",

  keywords: [
    "Contra Atlantis Group",
    "Contact Contra Atlantis Group",
    "Business Inquiries",
    "Business Partnerships",
    "Digital Integration",
    "Investment Opportunities",
    "Strategic Growth",
    "Corporate Contact",
    "General Correspondence",
  ],

  authors: [
    {
      name: "Contra Atlantis Group",
      url: SITE_URL,
    },
  ],

  creator: "Contra Atlantis Group",
  publisher: "Contra Atlantis Group",

  category: "Business",

  alternates: {
    canonical: CONTACT_URL,
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
    type: "website",

    url: CONTACT_URL,

    siteName: "Contra Atlantis Group",

    locale: "en_US",

    title: "Contact | Contra Atlantis Group",

    description:
      "Contact Contra Atlantis Group for business inquiries, partnerships, digital integration, investment opportunities, and general correspondence.",

    images: [
      {
        url: CONTACT_OG_IMAGE,
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Contra Atlantis Group",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Contact | Contra Atlantis Group",

    description:
      "Contact Contra Atlantis Group for business inquiries, partnerships, digital integration, investment opportunities, and general correspondence.",

    images: [
      {
        url: CONTACT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Contra Atlantis Group",
      },
    ],
  },
};