import { MediaQueryConsumer } from "../../utils/withMediaQuery";

export const h1 = ({ children }) => (
  <MediaQueryConsumer>
    {({ isMobile }) => (
      <h1>
        {children}
        <div className="spacer" />
        <hr />
        <style jsx>{`
          h1 {
            text-align: center;
            font-size: ${isMobile ? "1.4em" : "1.8em"};
            padding:  ${isMobile ? "22px" : "24px"};
            transform: rotate(${isMobile ? "-4.1deg" : "-7.1deg"});
          }

          .spacer {
            height: 12px;
          }

          hr {
            border: 0;
            height: 1px;
            transform: rotate(1.6deg);
            background-image: linear-gradient(
              to right,
              rgba(0, 0, 0, 0),
              rgba(0, 0, 0, 0.75),
              rgba(0, 0, 0, 0)
            );
          }
        `}</style>
      </h1>
    )}
  </MediaQueryConsumer>
);

export const h2 = ({ children }) => (
  <MediaQueryConsumer>
    {({ isMobile, isTablet }) => (
      <h2>
        {children}
        <style jsx>{`
          h2 {
            padding: 0 24px;
            transform: rotate(
              ${!isMobile && !isTablet ? "-5.4deg" : "-1.4deg"}
            );
          }
        `}</style>
      </h2>
    )}
  </MediaQueryConsumer>
);
