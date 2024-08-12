/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://gradyn.dev',
    generateRobotsTxt: true,
}