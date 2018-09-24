import { Fragment } from "react";
import Head from "next/head";
import * as colors from "../utils/colors";
import { fontFamily } from "../utils/styleConstants";
import Header from "./Header";
import Main from "./Main";
import NProgress from "./NProgress";

export default ({ children }) => (
  <Fragment>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c|Rubik"
        rel="stylesheet"
      />
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
        font-family: ${fontFamily};
        background-color: ${colors.white};
        background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2367696e' fill-opacity='0.17'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
      }
    `}</style>
  </Fragment>
);
