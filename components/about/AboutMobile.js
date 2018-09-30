import * as colors from "../../utils/colors";
import IconLink from "../interaction/IconLink";
import RepoList from "./RepoList";

const linkStyle = {
  margin: "6px 12px"
};

export default ({ repos }) => (
  <div className="profile">
    <p>Check out my repos & coding activity:</p>
    <div>
      <IconLink
        style={linkStyle}
        href="https://github.com/embiem"
        iconSrc="static/icons8-github.svg"
        text="GitHub"
      />
      <IconLink
        style={linkStyle}
        href="https://gitlab.com/embiem"
        iconSrc="static/Gitlab_font_awesome.svg"
        text="GitLab"
      />
    </div>
    <hr />
    <p>Let's connect:</p>
    <div>
      <IconLink
        style={linkStyle}
        href="https://www.linkedin.com/in/mbeierling/"
        iconSrc="static/iconmonstr-linkedin-3.svg"
        text="Linkedin"
      />
      <IconLink
        style={linkStyle}
        href="https://twitter.com/em_bi_em"
        iconSrc="static/Twitter_Logo_Blue.svg"
        text="Twitter"
      />
      <IconLink
        style={linkStyle}
        href="https://keybase.io/mbeierling"
        iconSrc="static/keybase-icon.svg"
        text="Keybase"
      />
    </div>
    <hr />
    <div className="profile-image">
      <img src="static/martin-wedding.jpg" alt="Me at my wedding" />
      <span>That's me at my wedding.</span>
    </div>

    <style jsx>{`
      .profile {
        width: 90%;
        height: 472px;
        padding: 12px;
        transform: rotate(-1.52deg);
        background-color: ${colors.primary};
        color: ${colors.background};
        box-shadow: rgba(0, 0, 0, 0.1) 4px 4px 4px;
      }

      hr {
        transform: rotateZ(1.52deg);
        margin: 24px 0;
      }

      .profile-image {
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
        font-weight: 500;
        font-size: 14px14px;
      }

      .profile-image:hover span {
        opacity: 1;
      }
    `}</style>
  </div>
);
