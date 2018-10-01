const fs = require("fs");
const getPathsObject = require("./getPathsObject");
const formatDate = require("./formatDate");

// ROBOTS.txt
const robotsTxt = `User-agent: *
Sitemap: https://embiem.me/sitemap_local.xml
Disallow:`;

fs.writeFileSync("out/robots.txt", robotsTxt);
console.log("robots.txt saved!");

// SITEMAP.XML
const pathsObj = getPathsObject();
const today = formatDate(new Date());
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
  ${Object.keys(pathsObj).map(
    path => `<url>
    <loc>https://embiem.me${path}</loc>
    <lastmod>${today}</lastmod>
  </url>`
  )}
</urlset>`;

fs.writeFileSync("out/sitemap_local.xml", sitemapXml);
console.log("sitemap_local.xml saved!");

// GOOGLE's VERIFY HTML
const googleVerify = `google-site-verification: google8f5d91a719b65f09.html`;
fs.mkdirSync("out/sitemap.xml");
fs.writeFileSync("out/sitemap.xml/google8f5d91a719b65f09.html", googleVerify);
console.log("google8f5d91a719b65f09.html saved!");
