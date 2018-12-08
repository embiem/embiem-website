import * as colors from "../../utils/colors";

export default ({ iconSrc, text, ...props }) => (
  <a {...props}>
    <img src={iconSrc} alt={text || "Social Media Icon"} />
    <span>{text}</span>
    <style jsx>{`
      a {
        background: ${colors.background};
        color: ${colors.primary};
        text-decoration: none;
        font-size: 14px;
        padding: 6px 10px;
        border-radius: 5px 0 5px 0;
        transition: all 0.2s;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
      }

      a:hover {
        background: ${colors.special};
        border-radius: 0 0 0 0;
      }

      a img {
        height: 25px;
        margin-right: 8px;
      }
    `}</style>
  </a>
);
