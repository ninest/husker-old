/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://husker.nu",
  sitemapSize: 100000,
  generateRobotsTxt: true,
};
