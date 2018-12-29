import { MediaQueryConsumer } from "../../utils/withMediaQuery";

export default ({ children }) => (
  <MediaQueryConsumer>
    {({ isMobile, isTablet }) => (
      <p>
        {children}
        <style jsx>{`
          p {
            padding: 0 ${isMobile || isTablet ? "32px" : "64px"};
            transform: rotate(
              ${!isMobile && !isTablet ? "-2.4deg" : "0deg"}
            );
            font-size: ${isMobile || isTablet ? "16px" : "18px"};
            line-height: 2rem;
            letter-spacing: 0.7px;
          }
        `}</style>
      </p>
    )}
  </MediaQueryConsumer>
);
