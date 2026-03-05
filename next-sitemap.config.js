/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://mappedtechnologies.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    additionalSitemaps: [
      "https://mappedtechnologies.com/server-sitemap-index.xml",
    ],
  },
  additionalPaths: async () => {
    const fs = require("fs");
    const path = require("path");
    const blogDir = path.join(process.cwd(), "src/content/blog");

    if (!fs.existsSync(blogDir)) return [];

    const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));
    return files.map((file) => ({
      loc: `/blog/${file.replace(/\.mdx$/, "")}`,
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }));
  },
};
