import type { Metadata } from "next";

const SITE_URL =
  "https://jponders.legitcreations.com.ng";

const CAO_DOSSIER_URL =
  `${SITE_URL}/dossier/strategic-growth`;

// Replace this with the actual CAO photograph URL
// from your Vercel Blob Storage.
const CAO_OG_IMAGE =
  "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/xxxxxxxxxxxx.jpg";

export const julioPonderMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title:
    "Julio Ponder Seneres — Chief Administrative Officer | Strategic Growth Dossier",

  description:
    "Public institutional dossier documenting the strategic governance, executive risk, LatAm investment, AI governance, and institutional growth framework of Julio Ponder Seneres.",

  keywords: [
    "Julio Ponder Seneres",
    "Julio Ponder Seneres Chief Administrative Officer",
    "Julio Ponder Seneres CAO",
    "CAO dossier",
    "Strategic Growth Dossier",
    "Executive Dossier",
    "Executive Risk Doctrine",
    "LatAm Investment Doctrine",
    "AI Governance",
    "Institutional Governance",
  ],

  authors: [
    {
      name: "Contra Atlantis Group",
    },
  ],

  creator: "Contra Atlantis Group",
  publisher: "Contra Atlantis Group",

  alternates: {
    canonical: CAO_DOSSIER_URL,
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

    url: CAO_DOSSIER_URL,

    siteName: "Contra Atlantis Group",

    locale: "en_US",

    title:
      "Julio Ponder Seneres — Strategic Growth Dossier",

    description:
      "Institutional profile covering executive risk governance, strategic investment, international expansion, and AI governance.",

    images: [
      {
        url: CAO_OG_IMAGE,

        alt:
          "Julio Ponder Seneres — Chief Administrative Officer Strategic Growth Dossier",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Julio Ponder Seneres — Strategic Growth Dossier",

    description:
      "Institutional profile covering strategic governance, investment, risk, international expansion, and AI oversight.",

    images: [CAO_OG_IMAGE],
  },
};