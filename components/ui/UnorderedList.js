import { MediaQueryConsumer } from "../../utils/withMediaQuery";

export default ({ children }) => (
  <MediaQueryConsumer>
    {({ isMobile, isTablet }) => (
      <ul>
        {children}
        <style jsx>{`
          ul {
            padding: 0 ${isMobile ? "40px" : "64px"};
            transform: rotate(${!isMobile && !isTablet ? "-4.6deg" : "-0.6deg"});
            list-style-image: url("/static/images/squirrel.png");
          }
        `}</style>
      </ul>
    )}
  </MediaQueryConsumer>
);
