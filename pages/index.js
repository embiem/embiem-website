import css from "styled-jsx/css";
import axios from "axios";
import Layout from "../components/Layout";
import IconButton from "../components/IconButton";
import IconLink from "../components/IconLink";
import RepoList from "../components/RepoList";
import * as colors from "../utils/colors";

const { className: buttonClassName, styles: buttonStyles } = css.resolve`
a:nth-of-type(1) {
  position: relative;
  left: 18px;
  top: 70px;
  transform: rotate(-1.26deg);
}

a:nth-of-type(2) {
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
        <div className="profile">
          <h2>Some of my open source repos:</h2>
          <div>
            <IconLink
              href="https://github.com/embiem"
              className={buttonClassName}
              iconSrc="static/icons8-github.svg"
              text="GitHub"
            />
            <IconLink
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
          <div>
            <IconLink
              className={buttonClassName}
              iconSrc="static/iconmonstr-linkedin-3.svg"
              text="Linkedin"
            />
            <IconLink
              className={buttonClassName}
              iconSrc="static/Twitter_Logo_Blue.svg"
              text="Twitter"
            />
          </div>
          <hr />
          <h2>Let's connect!</h2>
          <img src="static/martin-wedding.jpg" alt="Me at my wedding" />
          <caption>That's me at my wedding.</caption>
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

            img {
              position: relative;
              left: 450px;
              top: -10px;
              box-shadow: rgba(0, 0, 0, 0.25) 4px 4px 4px;
              border-radius: 47px;
              width: 180px;
              transform: rotate(3.5deg);
            }
          `}</style>
          {buttonStyles}
        </div>
      </Layout>
    );
  }
}
