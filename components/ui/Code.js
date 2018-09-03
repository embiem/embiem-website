import Prism from "prismjs";
import Head from "next/head";

export default ({ children }) => (
  <pre>
    {children}
    <Head>
      <link href="/static/prism.css" rel="stylesheet" />
    </Head>
    <style jsx>{`
      pre {
        position: relative;
        top: 67px;
        left: 85px;
        margin-right: 170px;
        transform: rotate(-4.4deg);
      }
    `}</style>
  </pre>
);
