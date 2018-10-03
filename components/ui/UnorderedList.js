import { MediaQueryConsumer } from "../../utils/withMediaQuery";

export default ({ children }) => (
  <MediaQueryConsumer>
    {({ isMobile, isTablet }) => (
      <ul>
        {children}
        <style jsx>{`
          ul {
            padding: 0 ${isMobile ? "40px" : "64px"};
            transform: rotate(${!isMobile && !isTablet ? "-2.4deg" : "-0.4deg"});
            list-style-image: url("/static/images/squirrel.png");
          }
        `}</style>
      </ul>
    )}
  </MediaQueryConsumer>
);
