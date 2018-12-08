import React from "react";
import axios from "axios";
import Layout from "../components/Layout";
import AboutDesktop from "../components/about/AboutDesktop";
import AboutMobile from "../components/about/AboutMobile";

import { MediaQueryConsumer } from "../utils/withMediaQuery";

export default class IndexPage extends React.Component {
  static async getInitialProps() {
    try {
      const response = await axios.get(
        "https://api.github.com/search/repositories",
        {
          params: {
            q: "user:embiem",
            sort: "stars"
          }
        }
      );

      if (response.data && response.data.items) {
        return {
          repos: response.data.items.slice(0, 3).map(repo => ({
            id: repo.id,
            name: repo.name,
            url: repo.html_url,
            description: repo.description
          }))
        };
      }
    } catch (err) {
      console.error(err);
    }

    return {
      repos: []
    };
  }

  render() {
    return (
      <Layout>
        <MediaQueryConsumer>
          {({ isMobile, isTablet }) =>
            isMobile || isTablet ? (
              <AboutMobile repos={this.props.repos} />
            ) : (
              <AboutDesktop repos={this.props.repos} />
            )
          }
        </MediaQueryConsumer>
      </Layout>
    );
  }
}
