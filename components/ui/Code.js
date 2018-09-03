import Prism from "prismjs"; // all we need to do is import it once
import { Spring } from "react-spring";
import Head from "next/head";

export default ({ children }) => (
  <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
    {styles => (
      <pre style={styles}>
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
    )}
  </Spring>
);
