import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const SITE_URL = "https://jponders.legitcreations.com.ng";
const LOGO_URL =
  "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/jps_logo.svg";

const OG_IMAGE_URL =
  "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/opengraph.png";

const FAVICON_URL =
  "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/favicon.ico";

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "Contra Atlantis Group | Banking & Fintech Infrastructure | Julio Ponder Seneres",
    template: "%s | Contra Atlantis",
  },

  description:
    "Contra Atlantis Group: enterprise infrastructure for banking, payments and fintech, with administrative, operational and digital integration capabilities led by Julio Ponder Seneres.",

  keywords: [
    "Contra Atlantis Group",
    "Banking Infrastructure",
    "Fintech Infrastructure",
    "Fintech Honduras",
    "Core Banking",
    "Payments",
    "Digital Integration",
    "Julio Ponder Seneres",
    "Chief Administrative Officer",
    "CAO",
    "Strategic Growth",
    "Administrative Operations",
    "Atlántida",
    "Honduras",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  /**
   * Open Graph metadata
   */
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Contra Atlantis Group",

    title:
      "Contra Atlantis Group | Banking & Fintech Infrastructure",

    description:
      "Enterprise infrastructure for banking, payments and fintech, with administrative, operational and digital integration capabilities led by Julio Ponder Seneres.",

    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Contra Atlantis Group",
      },
    ],
  },

  /**
   * X / Twitter metadata
   */
  twitter: {
    card: "summary_large_image",

    title:
      "Contra Atlantis Group | Banking & Fintech Infrastructure",

    description:
      "Enterprise banking, payments and digital infrastructure led by Julio Ponder Seneres.",

    images: [OG_IMAGE_URL],
  },

  /**
   * Site icons
   */
  icons: {
    icon: [
      {
        url: FAVICON_URL,
        type: "image/x-icon",
      },
      {
        url: LOGO_URL,
        type: "image/svg+xml",
      },
    ],

    apple: [
      {
        url: LOGO_URL,
        type: "image/svg+xml",
      },
    ],
  },

  manifest: "/manifest.json",

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Contra Atlantis",
  },
};

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,

    name: "Contra Atlantis Group",

    url: SITE_URL,

    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
    },

    address: {
      "@type": "PostalAddress",
      addressLocality: "Atlántida",
      addressCountry: "HN",
    },

    founder: {
      "@type": "Person",
      name: "Julio Ponder Seneres",
    },
  },

  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,

    name: "Julio Ponder Seneres",

    jobTitle: "Chief Administrative Officer",

    worksFor: {
      "@id": `${SITE_URL}/#organization`,
    },

    url: SITE_URL,

    address: {
      "@type": "PostalAddress",
      addressLocality: "Atlántida",
      addressCountry: "HN",
    },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <head>
        {/* Google Search Console verification */}
        <meta
          name="google-site-verification"
          content="3-zan2mnlXQc8aKFUYw0sEkcBZjHcEXk8DvEArCczwE"
        />

        {/* Pinterest domain verification */}
        <meta
          name="p:domain_verify"
          content="ea3a43d2bcb841c330ec3c5d9a7062a3"
        />

        {/* Vercel Blob connection */}
        <link
          rel="preconnect"
          href="https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com"
          crossOrigin="anonymous"
        />
      </head>

      <body className="antialiased bg-obsidian text-bone selection:bg-gold/30">
        {children}

        {/* Organization + Person structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      </body>
    </html>
  );
}