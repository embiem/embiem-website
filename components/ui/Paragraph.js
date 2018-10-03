import { MediaQueryConsumer } from "../../utils/withMediaQuery";

export default ({ children }) => (
  <MediaQueryConsumer>
    {({ isMobile, isTablet }) => (
      <p>
        {children}
        <style jsx>{`
          p {
            padding: 0 ${isMobile ? "32px" : "64px"};
            transform: rotate(
              ${!isMobile && !isTablet ? "-2.4deg" : "0deg"}
            );
            font-size: ${isMobile ? "16px" : "18px"};
            line-height: 34px;
            letter-spacing: 0.7px;
          }
        `}</style>
      </p>
    )}
  </MediaQueryConsumer>
);
