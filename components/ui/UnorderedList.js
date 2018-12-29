import { MediaQueryConsumer } from "../../utils/withMediaQuery";

export default ({ children }) => (
  <MediaQueryConsumer>
    {({ isMobile, isTablet }) => (
      <ul className="blog-ul">
        {children}
        <style jsx global>{`
          .blog-ul {
            font-size: ${isMobile ? "16px" : "18px"};
            letter-spacing: 0.7px;
            line-height: 1.5rem;
            padding: 0 ${isMobile ? "40px" : "64px"};
            transform: rotate(${!isMobile && !isTablet ? "-2.4deg" : "-0.4deg"});
            list-style-type: circle;
          }

          .blog-ul > li {
            margin: 8px 0;
          }
        `}</style>
      </ul>
    )}
  </MediaQueryConsumer>
);
