// next.config.js
const fs = require("fs");
const path = require("path");
const withCSS = require("@zeit/next-css");
const withMDX = require("@zeit/next-mdx")();
const getPathsObject = require("./scripts/getPathsObject");

module.exports = withCSS(
  withMDX({
    pageExtensions: ["js", "jsx", "md", "mdx"],
    exportPathMap: function() {
      const fileObj = getPathsObject();
      return {
        ...fileObj,
        "/": { page: "/" }
      };
    }
  })
);
