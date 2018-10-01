const fs = require("fs");
const getPathsObject = require("./getPathsObject");
const formatDate = require("./formatDate");

const robotsTxt = `User-agent: *
Sitemap: https://embiem.me/sitemap.xml
Disallow:`;

fs.writeFileSync("out/robots.txt", robotsTxt);
console.log("robots.txt saved!");

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

fs.writeFileSync("out/sitemap.xml", sitemapXml);
console.log("sitemap.xml saved!");
