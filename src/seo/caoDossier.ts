import type { Metadata } from "next";

const SITE_URL = "https://jponders.legitcreations.com.ng";

const CAO_DOSSIER_URL = `${SITE_URL}/dossier/strategic-growth`;

const CAO_OG_IMAGE =
  "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/opengraph.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: 'Strategic Growth | CAO Dossier - Julio Ponder Seneres',

  description:
    "Institutional dossier documenting the strategic governance, executive risk, investment, international expansion, AI governance, and institutional growth framework of Julio Ponder Seneres.",

  keywords: [
    "Julio Ponder Seneres",
    "Julio Ponder Seneres CAO",
    "Chief Administrative Officer",
    "Strategic Growth Dossier",
    "Executive Dossier",
    "Strategic Governance",
    "Executive Risk Governance",
    "LatAm Investment",
    "International Expansion",
    "AI Governance",
    "Institutional Growth",
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

  category: "Business",

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
    type: "profile",

    url: CAO_DOSSIER_URL,

    siteName: "Contra Atlantis Group",

    locale: "en_US",

    title: "Julio Ponder Seneres | CAO — Strategic Growth Dossier",

    description:
      "Institutional profile covering strategic governance, executive risk, investment, international expansion, AI governance, and institutional growth.",

    images: [
      {
        url: CAO_OG_IMAGE,
        width: 1200,
        height: 630,
        alt:
          "Julio Ponder Seneres — Chief Administrative Officer Strategic Growth Dossier",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Julio Ponder Seneres — Strategic Growth Dossier",

    description:
      "Institutional profile covering strategic governance, investment, risk, international expansion, AI governance, and institutional growth.",

    images: [
      {
        url: CAO_OG_IMAGE,
        alt:
          "Julio Ponder Seneres — Strategic Growth Dossier",
      },
    ],
  },
};