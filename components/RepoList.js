import * as colors from "../utils/colors";

export default ({ repos, ...props }) => (
  <div {...props}>
    {repos && repos.length > 0 ? (
      repos.map(repo => (
        <a key={repo.id} className="repo" href={repo.url}>
          <div>
            <h3>{repo.name}</h3>
            <span>{repo.description}</span>
          </div>
        </a>
      ))
    ) : (
      <a href="">{"<-- Visit my git spaces"}</a>
    )}
    <style jsx>{`
      a {
        color: inherit;
        transition: all 0.2s;
      }

      a:hover {
        color: ${colors.special};
      }

      h3 {
        margin: 0;
      }

      a div {
        display: inline-block;
      }

      span {
        display: block;
        position: relative;
        left: 55px;
        top: -6px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 335px;
      }

      .repo:nth-child(odd) h3 {
        font-weight: bold;
        font-size: 14px;
        transform: rotate(0.65deg);
      }

      .repo:nth-child(odd) span {
        font-weight: lighter;
        font-size: 12px;
        transform: rotate(-0.2deg);
      }

      .repo:nth-child(even) h3 {
        font-weight: bold;
        font-size: 14px;
        transform: rotate(1.35deg);
      }

      .repo:nth-child(even) span {
        top: -4px;
        font-weight: lighter;
        font-size: 12px;
        transform: rotate(1.8deg);
      }
    `}</style>
  </div>
);
