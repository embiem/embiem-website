import { MediaQueryConsumer } from "../../utils/withMediaQuery";

export default ({ children }) => (
  <MediaQueryConsumer>
    {({ isMobile, isTablet }) => (
      <ul className="dynamic-shadow">
        {children}
        <style jsx>{`
          ul {
            font-size: ${isMobile ? "16px" : "18px"};
            letter-spacing: 0.7px;
            line-height: 34px;
            padding: 0 ${isMobile ? "40px" : "64px"};
            transform: rotate(${!isMobile && !isTablet ? "-2.4deg" : "-0.4deg"});
            list-style-image: url("/static/images/squirrel.png");
          }
        `}</style>
      </ul>
    )}
  </MediaQueryConsumer>
);
