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
}

a:nth-of-type(3) {
  position: relative;
  left: -161px;
  top: 170px;
  transform: rotate(1.6deg);
}
`;

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
              href="https://gitlab.com/embiem"
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
              href="https://www.linkedin.com/in/mbeierling/"
              className={buttonClassName}
              iconSrc="static/iconmonstr-linkedin-3.svg"
              text="Linkedin"
            />
            <IconLink
              href="https://twitter.com/em_bi_em"
              className={buttonClassName}
              iconSrc="static/Twitter_Logo_Blue.svg"
              text="Twitter"
            />
            <IconLink
              href="https://keybase.io/mbeierling"
              className={buttonClassName}
              iconSrc="static/keybase-icon.svg"
              text="Keybase"
            />
          </div>
          <hr />
          <h2>Let's connect!</h2>
          <div className="profile-image">
            <img src="static/martin-wedding.jpg" alt="Me at my wedding" />
            <span>That's me at my wedding.</span>
          </div>
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
              font-size: 14px;
              font-weight: 400;
            }

            h2:nth-of-type(1) {
              position: relative;
              left: 165px;
              top: 43px;
              transform: rotate(2.1deg);
            }
            h2:nth-of-type(2) {
              font-weight: bold;
              position: relative;
              left: 205px;
              top: 50px;
              transform: rotate(-1.1deg);
            }

            hr:nth-of-type(1) {
              width: 140px;
              transform: rotate(82deg);
              position: relative;
              left: -139px;
              top: 72px;
            }

            hr:nth-of-type(2) {
              width: 155px;
              transform: rotate(82deg);
              position: relative;
              left: -110px;
              top: 86px;
            }

            .profile-image {
              position: relative;
              left: 450px;
              top: -10px;
              display: inline-block;
            }

            img {
              box-shadow: rgba(0, 0, 0, 0.25) 4px 4px 4px;
              border-radius: 47px;
              width: 180px;
              transform: rotate(3.5deg);
            }

            span {
              opacity: 0;
              color: ${colors.primary};
              position: relative;
              left: -172px;
              top: 20px;
              font-weight: 500;
              font-size: 14px14px;
            }

            .profile-image:hover span {
              opacity: 1;
            }
          `}</style>
          {buttonStyles}
        </div>
      </Layout>
    );
  }
}
