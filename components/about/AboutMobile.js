import * as colors from "../../utils/colors";
import IconLink from "../interaction/IconLink";
import NameExplain from "../header/NameExplain";
import { summary, repoHeader, socialHeader } from "./content.json";

const linkStyle = {
  margin: "6px 8px"
};

export default ({ repos }) => (
  <>
    <div className="summary">
      {summary}
      <style jsx>
        {`
          .summary {
            width: 90%;
            padding: 12px;
            font-size: 16px;
            text-align: center;
            letter-spacing: 0.4px;
            line-height: 28px;
            background-color: ${colors.background};
            color: ${colors.primary};
            box-shadow: rgba(0, 0, 0, 0.1) 4px 4px 4px inset;
          }
        `}
      </style>
    </div>
    <div className="profile">
      <p>{repoHeader}</p>
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
      <p>{socialHeader}:</p>
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

      <p>Why "embiem"?</p>
      <NameExplain />
      <div className="profile-image">
        <img src="static/martin-wedding.jpg" alt="Me at my wedding" />
      </div>

      <style jsx>{`
        .profile {
          width: 90%;
          height: 622px;
          padding: 12px;
          background-color: ${colors.primary};
          color: ${colors.background};
          box-shadow: rgba(0, 0, 0, 0.1) 4px 4px 4px inset;
        }

        hr {
          transform: rotateZ(1.52deg);
          margin: 24px 0;
        }

        .profile-image {
          margin-top: 18px;
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
  </>
);
