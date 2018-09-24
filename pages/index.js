import css from "styled-jsx/css";
import axios from "axios";
import Layout from "../components/Layout";
import IconButton from "../components/IconButton";
import RepoList from "../components/RepoList";
import IndexContent from "./index.mdx";
import uiComponents from "../components/ui";
import * as colors from "../utils/colors";
import { fontFamily } from "../utils/styleConstants";

const { className: buttonClassName, styles: buttonStyles } = css.resolve`
button:nth-of-type(1) {
  position: relative;
  left: 18px;
  top: 70px;
  transform: rotate(-1.26deg);
}

button:nth-of-type(2) {
  position: relative;
  left: -66px;
  top: 120px;
  transform: rotate(-0.2deg);
}`;

export default class extends React.Component {
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
        <div className="profile">
          <h2>Some of my open source repos:</h2>
          <div>
            <IconButton
              className={buttonClassName}
              iconSrc="static/icons8-github.svg"
              text="GitHub"
            />
            <IconButton
              className={buttonClassName}
              iconSrc="static/Gitlab_font_awesome.svg"
              text="GitLab"
            />
          </div>
          <hr />
          <RepoList
            repos={this.props.repos}
            style={{
              position: "relative",
              top: 0,
              left: 171
            }}
          />
          <style jsx>{`
            .profile {
              width: 577px;
              height: 472px;
              transform: rotate(-1.52deg);
              background-color: ${colors.primary};
              color: ${colors.background};
              box-shadow: rgba(0, 0, 0, 0.1) 4px 4px 4px;
            }

            h2 {
              position: relative;
              left: 165px;
              top: 50px;
              transform: rotate(2.1deg);

              font-size: 14px;
              font-weight: 400;
            }

            hr {
              width: 120px;
              transform: rotate(82deg);
              position: relative;
              left: -139px;
              top: 67px;
            }
          `}</style>
          {buttonStyles}
        </div>
      </Layout>
    );
  }
}
