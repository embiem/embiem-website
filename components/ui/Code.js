import React, { Component } from "react";
import PropTypes from "prop-types";
import { Spring } from "react-spring";
import Head from "next/head";
import { MediaQueryConsumer } from "../../utils/withMediaQuery";
import Prism from "prismjs";

export class InlineCode extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  static defaultProps = {
    className: "language-*"
  };

  componentDidMount() {
    // Highlight code components on the client
    Prism.highlightAll();
  }

  render() {
    return (
      <code className={this.props.className}>
        {this.props.children}
        <Head>
          <link href="/static/prism.css" rel="stylesheet" />
        </Head>
        <style jsx>{`
          code {
            padding: 2px 8px !important;
          }
        `}</style>
      </code>
    );
  }
}

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
                      width: 692px;
                      display: inline-block;
                      margin: 1em 0 !important;
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
