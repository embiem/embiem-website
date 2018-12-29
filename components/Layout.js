import React, { Fragment } from "react";
import Head from "next/head";
import * as colors from "../utils/colors";
import { fontFamily } from "../utils/styleConstants";
import Header from "./Header";
import Main from "./Main";
import NProgress from "./NProgress";
import { withMediaQuery } from "../utils/withMediaQuery";

export default withMediaQuery(({ children, isMobile }) => (
  <Fragment>
    <Head>
      <meta charset="utf-8" />
      <link rel="canonical" href="https://embiem.me" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style amp-boilerplate="">{`body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`}</style>
      <noscript>
        <style amp-boilerplate="">{`body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`}</style>
      </noscript>
      <style amp-custom="">{`body {font-family: Roboto, sans-serif; padding: 30px; color: #444;} h1 {margin-bottom: 5px;} .byline { color: #aaa; margin-bottom: 25px; } p {font-size: 18px; line-height: 30px; margin-top: 30px;} .caption {color: #ccc; margin-top: 0; font-size: 14px; text-align: center;}`}</style>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="theme-color" content={colors.primary} />
      <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/static/favicon/site.webmanifest" />

      <title key="title">Martin Beierling-Mutz | MBM | embiem</title>
      <meta
        key="description"
        name="description"
        content="Martin Beierling-Mutz's Personal Website & Blog"
      />
      <meta key="author" name="author" content="Martin Beierling-Mutz" />
      <meta key="twitter:site" name="twitter:site" content="@em_bi_em" />
      <meta
        key="og:title"
        property="og:title"
        content="Martin Beierling-Mutz | MBM | embiem"
      />
      <meta property="og:type" content="website" />
      <meta key="og:url" property="og:url" content="https://embiem.me" />
      <meta
        property="og:image"
        content={require("../images/martin-wedding.jpg")}
      />
      <meta
        key="og:description"
        name="og:description"
        content="Martin Beierling-Mutz's Personal Website & Blog"
      />
      <meta
        key="keywords"
        name="keywords"
        content="martin beierling-mutz, martin beierling, MBM, embiem, personal website, blog, javascript, web development"
      />
      <script async src="https://cdn.ampproject.org/v0.js" />
    </Head>

    <NProgress color={colors.primary} height={4} />
    <Header />
    <Main>{children}</Main>

    <style global jsx>{`
      @import url("https://rsms.me/inter/inter-ui.css");

      html {
        min-height: 100%;
      }

      body {
        padding: 4px;
        font-family: ${fontFamily};
        color: ${colors.primary};
        background-color: ${colors.white};
        ${isMobile ? "padding: 3px;" : ""}
        background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2367696e' fill-opacity='0.17'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
      }
    `}</style>
  </Fragment>
));
