import { Trail } from "react-spring";
import * as colors from "../../utils/colors";
import IconLink from "../interaction/IconLink";
import NameExplain from "../header/NameExplain";
import { summary, repoHeader, socialHeader } from "./content.json";

const linkStyle = {
  margin: "6px 8px"
};

const items = [
  <p>{repoHeader}</p>,
  <div>
    <IconLink
      style={linkStyle}
      href="https://github.com/embiem"
      iconSrc={require("../../images/icons/icons8-github.svg")}
      text="GitHub"
    />
    <IconLink
      style={linkStyle}
      href="https://gitlab.com/embiem"
      iconSrc={require("../../images/icons/Gitlab_font_awesome.svg")}
      text="GitLab"
    />
  </div>,
  <hr />,
  <p>{socialHeader}:</p>,
  <div>
    <IconLink
      style={linkStyle}
      href="https://www.linkedin.com/in/mbeierling/"
      iconSrc={require("../../images/icons/iconmonstr-linkedin-3.svg")}
      text="Linkedin"
    />
    <IconLink
      style={linkStyle}
      href="https://twitter.com/em_bi_em"
      iconSrc={require("../../images/icons/Twitter_Logo_Blue.svg")}
      text="Twitter"
    />
    <IconLink
      style={linkStyle}
      href="https://dev.to/embiem"
      iconSrc={require("../../images/icons/dev-badge.svg")}
      text="DEV.to"
    />
    <IconLink
      style={linkStyle}
      href="https://keybase.io/mbeierling"
      iconSrc={require("../../images/icons/keybase-icon.svg")}
      text="Keybase"
    />
  </div>,

  <>
    <div className="profile-image">
      <img
        src={require("../../images/martin-wedding.jpg")}
        alt="Me at my wedding"
      />
    </div>
    <style jsx>{`
      .profile-image img {
        box-shadow: rgba(0, 0, 0, 0.25) 4px 4px 4px;
        border-radius: 47px;
        width: 180px;
        transform: rotate(3.5deg);
      }
      .profile-image {
        margin-top: 24px;
        display: flex;
        justify-content: flex-end;
      }
      .profile-image:hover span {
        opacity: 1;
      }
    `}</style>
  </>
];

export default () => (
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
            border-radius: 5px 5px 0 0;
          }
        `}
      </style>
    </div>
    <div className="profile">
      <Trail
        items={items}
        from={{ transform: "translate3d(0,-80px,0)", opacity: 0 }}
        to={{ transform: "translate3d(0,0px,0)", opacity: 1 }}
      >
        {item => props => <div style={props}>{item}</div>}
      </Trail>

      <style jsx>{`
        .profile {
          width: 90%;
          padding: 12px;
          background-color: ${colors.primary};
          color: ${colors.background};
          box-shadow: rgba(0, 0, 0, 0.1) 4px 4px 4px inset;
          border-radius: 0 0 5px 5px;
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
