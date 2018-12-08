import React, { Component } from "react";
import PropTypes from "prop-types";
import { Spring } from "react-spring";
import Head from "next/head";
import { MediaQueryConsumer } from "../../utils/withMediaQuery";
import Prism from "prismjs";

export default class CodeBlock extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  componentDidMount() {
    // Highlight code components on the client
    Prism.highlightAll();
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
            <MediaQueryConsumer>
              {({ isMobile, isTablet }) =>
                !isMobile && !isTablet ? (
                  <style jsx>{`
                    pre {
                      max-width: 77%;
                      display: inline-block;
                      margin: 1em 64px !important;
                      transform: rotate(-2.4deg);
                    }
                  `}</style>
                ) : (
                  <style jsx>{`
                    pre {
                      margin: 1em 10px !important;
                    }
                  `}</style>
                )
              }
            </MediaQueryConsumer>
          </pre>
        )}
      </Spring>
    );
  }
}
