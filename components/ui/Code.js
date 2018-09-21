import Prism from "prismjs";
import { Component } from "react";
import { Spring } from "react-spring";
import Head from "next/head";

export default class extends Component {
  componentDidMount() {
    // Highlight code components on the client
    window.Prism.highlightAll();
  }

  render() {
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {styles => (
          <pre style={styles}>
            {this.props.children}
            <Head>
              <link href="/static/prism.css" rel="stylesheet" />
            </Head>
            <style jsx>{`
              pre {
                position: relative;
                top: 67px;
                left: 85px;
                margin-right: 170px!important;
                transform: rotate(-4.4deg);
              }
            `}</style>
          </pre>
        )}
      </Spring>
    );
  }
}
