import { MediaQueryConsumer } from "../../utils/withMediaQuery";

export default ({ children }) => (
  <MediaQueryConsumer>
    {({ isMobile, isTablet }) => (
      <div>
        {children}
        <style jsx>{`
          div {
            margin: ${!isMobile && !isTablet ? "59px 64px -118px 64px" : "24px 16px -100px 16px"};
          }
        `}</style>
      </div>
    )}
  </MediaQueryConsumer>
);
