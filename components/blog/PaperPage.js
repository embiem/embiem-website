import * as colors from "../../utils/colors";
import { MediaQueryConsumer } from "../../utils/withMediaQuery";

export default ({ children }) => (
  <MediaQueryConsumer>
    {({ isMobile, isTablet }) =>
      !isMobile && !isTablet ? (
        <section>
          <div className="alice-background">{children}</div>
          <style jsx>{`
            section {
              margin-bottom: 64px;
              color: ${colors.primary};
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            .alice-background {
              background-color: ${colors.background};
              background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%2367696e' fill-opacity='0.13' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
              transform: rotate(4.4deg);
              width: 724px;
              box-shadow: rgba(0, 0, 0, 0.1) 4px 4px 8px;
              padding-bottom: 128px;
            }
          `}</style>
        </section>
      ) : (
        <section>
          <div className="alice-background">{children}</div>
          <style jsx>{`
            section {
              width: 100%;
              margin-bottom: 64px;
              color: ${colors.primary};
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            .alice-background {
              background-color: ${colors.background};
              background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%2367696e' fill-opacity='0.13' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
              width: 98%;
              box-shadow: rgba(0, 0, 0, 0.1) 4px 4px 8px;
              padding-bottom: 128px;
            }
          `}</style>
        </section>
      )
    }
  </MediaQueryConsumer>
);
