import { Fragment } from "react";
import Head from "next/head";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Main from "../components/Main";
import IndexContent from "./index.mdx";
import uiComponents from "../components/ui";

export default () => (
  <Layout>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c|Rubik"
        rel="stylesheet"
      />
    </Head>

    <Header />
    <Main>
    <IndexContent components={uiComponents} />
    </Main>
  </Layout>
);
