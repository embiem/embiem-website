import * as colors from "../../utils/colors";

export default props => (
  <div className="name-explain" {...props}>
    <span>Martin Beierling-Mutz</span>
    <div className="abbreviation">
      <span>M</span>
      <span>B</span>
      <span>M</span>
    </div>
    <div className="phonetics">
      <span>/em</span>
      <span>bɪ</span>
      <span>em/</span>
    </div>
    <style jsx>{`
      .name-explain {
        display: inline-block;
        padding: 4px 8px;

        color: ${colors.primary};
        background-color: ${colors.background};
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%2367696e' fill-opacity='0.13' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
        font-size: 13px;
        line-height: 14px;
        font-weight: 500;
      }

      .abbreviation {
        color: ${colors.shade};
      }
      .abbreviation span:nth-child(2) {
        position: relative;
        left: 32px;
      }
      .abbreviation span:nth-child(3) {
        position: relative;
        left: 84px;
      }

      .phonetics {
        color: ${colors.alternative};
      }
      .phonetics span:nth-child(1) {
        position: relative;
        left: -5px;
      }
      .phonetics span:nth-child(2) {
        position: relative;
        left: 20px;
      }
      .phonetics span:nth-child(3) {
        position: relative;
        left: 66px;
      }
    `}</style>
  </div>
);
