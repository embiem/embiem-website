import { Spring } from "react-spring";
import Navigation from "./header/Navigation";
import NameExplain from "./header/NameExplain";
import backgroundStyle from "./header/backgroundStyle";
import { MediaQueryConsumer } from "../utils/withMediaQuery";

let headerAnimFinished = false;

const HeaderMobile = () => (
  <Spring
    from={{ height: headerAnimFinished ? 30 : 0 }}
    to={{ height: 30 }}
    onRest={() => {
      console.log("headerAnimFinished = true");
      headerAnimFinished = true;
    }}
  >
    {({ height }) => (
      <header>
        <Navigation
          style={{
            width: "90%"
          }}
        />
        <style jsx>{`
          header {
            width: 100%;
            height: ${height}pt;
            position: fixed;
            left: 0;
            top: 0;
            display: flex;
            align-items: center;
            flex-direction: column;
            font-weight: bold;

            box-shadow: rgba(0, 0, 0, 0.25) 4px 4px 4px;
            z-index: 10;
            ${backgroundStyle};
          }
        `}</style>
      </header>
    )}
  </Spring>
);

const HeaderBig = () => (
  <Spring
    from={{
      left: headerAnimFinished ? "-20px" : "-200px",
      width: headerAnimFinished ? "98%" : "0%"
    }}
    to={{ left: "-20px", width: "98%" }}
    onRest={() => {
      console.log("headerAnimFinished = true");
      headerAnimFinished = true;
    }}
  >
    {({ left, width }) => (
      <header>
        <Navigation
          style={{
            position: "relative",
            left: "20%",
            minWidth: 200
          }}
        />
        <NameExplain style={{ float: "right" }} />
        <style jsx>{`
          header {
            width: ${width};
            height: 50px;
            position: fixed;
            left: ${left};
            top: 32px;
            font-weight: bold;
            font-size: 24px;
            transform: rotate(-1.36deg);
            box-shadow: rgba(0, 0, 0, 0.25) 4px 4px 4px;
            z-index: 10;
            ${backgroundStyle};
          }
        `}</style>
      </header>
    )}
  </Spring>
);

export default () => (
  <MediaQueryConsumer>
    {({ isMobile, isTablet }) =>
      isMobile || isTablet ? <HeaderMobile /> : <HeaderBig />
    }
  </MediaQueryConsumer>
);
