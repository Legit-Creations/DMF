import type {
  Metadata,
  Viewport
} from "next";
import {
  Inter,
  Playfair_Display
} from "next/font/google";
import "./globals.css";

const inter = Inter( {
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display( {
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://jponders.legitcreations.com.ng"),
  title: {
    default: "Contra Atlantis Group | Banking & Fintech Infrastructure | Julio Ponder Seneres - CAO",
      template: "%s | Contra Atlantis",
    },
    description: "Contra Atlantis Group: Enterprise infrastructure for Bank, Payments and Fintech in Honduras. Admin, HR, Procurement & Core Operations led by Julio Ponder Seneres, Chief Administrative Officer.",
    keywords: [
      "Contra Atlantis Group",
      "Banking Infrastructure",
      "Fintech Honduras",
      "Core Banking",
      "Payments",
      "Julio Ponder Seneres",
      "CAO",
      "HR Portal",
      "Procurement",
      "Atlántida"
    ],
    alternates: {
      canonical: "/"
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
    openGraph: {

      type: "website",
      // Infrastructure site, not just profile
      locale: "en_US",
      url: "https://jponders.legitcreations.com.ng",
      siteName: "Contra Atlantis Group",
      title: "Contra Atlantis Group | Banking & Fintech Infrastructure",
      description: "Enterprise infrastructure for Bank, Payments and Fintech. Admin, HR, Procurement & Operations led by Julio Ponder Seneres, CAO. Atlántida, Honduras.",
      images: [{
        url: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/xxxxxxxxxxxx",
        // Replace with company banner
        width: 1200,
        height: 630,
        alt: "Contra Atlantis Group - Banking & Fintech Infrastructure Platform",
      },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@ContraAtlantis",
      // Update if you have one
      creator: "@ContraAtlantis",
      title: "Contra Atlantis Group",
      description: "Banking, Payments & Fintech Infrastructure in Atlántida, Honduras. Led by Julio Ponder Seneres, CAO.",
      images: ["https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/xxxxxxxxxxxx"],
    },
    icons: {
      icon: [{
        url: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/favicon.ico",
        type: "image/x-icon"
      },
        {
          url: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/dmf_logo.png",
          type: "image/png",
          sizes: "32x32"
        },
      ],
      apple: [{
        url: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/apple-icon.png",
        type: "image/png"
      }],
    },
    manifest: "/manifest.json",
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: "Contra Atlantis",
    },
  };

  export default function RootLayout({
    children
  }: {
    children: React.ReactNode
  }) {

    const schema = [{
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://jponders.legitcreations.com.ng/#organization",
      "name": "Contra Atlantis Group",
      "url": "https://jponders.legitcreations.com.ng",
      "logo": {
        "@type": "ImageObject",
        "url": "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/dmf_logo.png"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Atlántida",
        "addressCountry": "HN"
      },
      "founder": {
        "@type": "Person",
        "name": "Julio Ponder Seneres"
      },
      "sameAs": [
        // "https://linkedin.com/company/contra-atlantis-group",
        // "https://twitter.com/ContraAtlantis"
      ]
    },
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://jponders.legitcreations.com.ng/#person",
        "name": "Julio Ponder Seneres",
        "jobTitle": "Chief Administrative Officer",
        "worksFor": {
          "@id": "https://jponders.legitcreations.com.ng/#organization"
        },
        "url": "https://jponders.legitcreations.com.ng",
        "image": "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/xxxxxxxxxxxx",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Atlántida",
          "addressCountry": "Honduras"
        }
      }];

    return (
      <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        {/* Verification meta tags */}
        <meta name="google-site-verification" content="3-zan2mnlXQc8aKFUYw0sEkcBZjHcEXk8DvEArCczwE" />
      <meta name="p:domain_verify" content="ea3a43d2bcb841c330ec3c5d9a7062a3" />

    {/* Preconnect blob storage - kills DNS lookup time */}
    <link rel="preconnect" href="https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com" crossOrigin="anonymous" />

  {/* Preload LCP Hero Image - this kills the red X in PageSpeed */}
  <link
  rel="preload"
  as="image"
  href="https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/smal%20screen%20background"
  fetchPriority="high"
  />
</head>
<body className="antialiased bg-obsidian text-bone selection:bg-gold/30">
{children}

{/* JSON-LD: Organization + Person Schema */}
<script
type="application/ld+json"
dangerouslySetInnerHTML={ { __html: JSON.stringify(schema) }}
/>
</body>
</html>
);
}