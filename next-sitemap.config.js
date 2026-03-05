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
  },
};
