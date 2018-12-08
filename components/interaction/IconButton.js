import * as colors from "../../utils/colors";

export default ({ iconSrc, text, ...props }) => (
  <button {...props}>
    <div>
      <img src={iconSrc} alt={text || "Social Media Icon"} />
      <span>{text}</span>
    </div>
    <style jsx>{`
      button {
        background: ${colors.background};
        border: 0;
        padding: 6px 10px;
        border-radius: 5px 0 5px 0;
        transition: all 0.2s;
        cursor: pointer;
      }

      button:hover {
        background: ${colors.special};
        border-radius: 0 0 0 0;
      }

      button div {
        display: flex;
        align-items: center;
      }

      button img {
        height: 25px;
        margin-right: 8px;
      }
    `}</style>
  </button>
);
