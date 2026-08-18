import type { MetadataRoute } from "next";

const BASE_URL = "https://jponders.legitcreations.com.ng";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/admin/",
      ],
    },

    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}