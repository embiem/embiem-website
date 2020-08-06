import React from "react";
import css from "styled-jsx/css";

import * as colors from "../../utils/colors";
import IconLink from "../interaction/IconLink";
import RepoList from "./RepoList";
import { summary, repoHeader, socialHeader } from "./content.json";

// This is my personal website where I will do whatever I want 😛
// ... Even though styling/positioning like this is frowned upon
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

a:nth-of-type(4) {
  position: relative;
  left: -244px;
  top: 221px;
  transform: rotate(1deg);
}
`;

export default ({ repos }) => (
  <>
    <div className="summary">
      {summary}
      <style jsx>
        {`
          .summary {
            text-align: justify;
            width: 543px;
            padding: 18px;
            margin-top: 18px;
            margin-right: 15px;
            font-size: 16px;
            letter-spacing: 0.4px;
            line-height: 1.5em;
            transform: rotate(-1.52deg);
            background-color: ${colors.background};
            color: ${colors.primary};
            box-shadow: rgba(0, 0, 0, 0.1) 4px 4px 4px inset;
          }
        `}
      </style>
    </div>
    <div className="profile">
      <h2>{repoHeader}</h2>
      <div>
        <IconLink
          href="https://github.com/embiem"
          className={buttonClassName}
          iconSrc={require("../../images/icons/icons8-github.svg")}
          text="GitHub"
        />
        <IconLink
          href="https://gitlab.com/embiem"
          className={buttonClassName}
          iconSrc={require("../../images/icons/Gitlab_font_awesome.svg")}
          text="GitLab"
        />
      </div>
      <hr />
      <RepoList
        repos={repos}
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
          iconSrc={require("../../images/icons/iconmonstr-linkedin-3.svg")}
          text="Linkedin"
        />
        <IconLink
          href="https://twitter.com/em_bi_em"
          className={buttonClassName}
          iconSrc={require("../../images/icons/Twitter_Logo_Blue.svg")}
          text="Twitter"
        />
        <IconLink
          href="https://dev.to/embiem"
          className={buttonClassName}
          iconSrc={require("../../images/icons/dev-badge.svg")}
          text="DEV.to"
        />
        <IconLink
          href="https://keybase.io/mbeierling"
          className={buttonClassName}
          iconSrc={require("../../images/icons/keybase-icon.svg")}
          text="Keybase"
        />
      </div>
      <hr />
      <h2>{socialHeader}</h2>
      <div className="profile-image">
        <img
          src={require("../../images/martin_prof_picture_2020_flipped.jpg")}
          alt="Me at my wedding"
        />
        <span>👋 Hey!</span>
      </div>

      <style jsx>{`
        .profile {
          width: 577px;
          height: 534px;
          transform: rotate(-1.52deg);
          background-color: ${colors.primary};
          color: ${colors.background};
          box-shadow: rgba(0, 0, 0, 0.1) 4px 4px 4px;
        }

        h2 {
          font-size: 16px;
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
          width: 204px;
          transform: rotate(82deg);
          position: relative;
          left: -110px;
          top: 118px;
        }

        .profile-image {
          position: relative;
          left: 450px;
          top: 18px;
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
  </>
);
