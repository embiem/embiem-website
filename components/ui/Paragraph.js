import { MediaQueryConsumer } from "../../utils/withMediaQuery";

export default ({ children }) => (
  <MediaQueryConsumer>
    {({ isMobile, isTablet }) => (
      <p>
        {children}
        <style jsx>{`
          p {
            padding: 0 32px;
            font-size: ${isMobile || isTablet ? "16px" : "18px"};
            line-height: 2rem;
            letter-spacing: 0.7px;
          }
        `}</style>
      </p>
    )}
  </MediaQueryConsumer>
);
