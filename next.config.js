// next.config.js
const fs = require("fs");
const path = require("path");
const withCSS = require("@zeit/next-css");
const withMDX = require("@zeit/next-mdx")();
const getPathsObject = require("./scripts/getPathsObject");

module.exports = withCSS(
  withMDX({
    pageExtensions: ["js", "jsx", "md", "mdx"],
    publicRuntimeConfig: {
      // Will be available on both server and client
      githubClientId: process.env.GITHUB_CLIENT_ID,
      githubClientSecret: process.env.GITHUB_CLIENT_SECRET
    },
    exportPathMap: function() {
      const fileObj = getPathsObject();
      return {
        ...fileObj,
        "/": { page: "/" }
      };
    }
  })
);
