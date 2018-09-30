import { MediaQueryConsumer } from "../../utils/withMediaQuery";

export default ({ children }) => (
  <MediaQueryConsumer>
    {({ isMobile, isTablet }) => (
      <div>
        {children}
        <style jsx>{`
          div {
            margin: 16px 64px;
            transform: rotate(${!isMobile && !isTablet ? "-4.4deg" : "0deg"});
          }
        `}</style>
      </div>
    )}
  </MediaQueryConsumer>
);
