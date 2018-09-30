import Navigation from "./header/Navigation";
import NameExplain from "./header/NameExplain";
import backgroundStyle from "./header/backgroundStyle";
import { MediaQueryConsumer } from "../utils/withMediaQuery";

const HeaderMobile = () => (
  <header>
    <Navigation
      style={{
        width: "90%"
      }}
    />
    <style jsx>{`
      header {
        width: 100%;
        height: 30px;
        position: fixed;
        left: 0;
        top: 0;
        display: flex;
        align-items: center;
        flex-direction: column;

        box-shadow: rgba(0, 0, 0, 0.25) 4px 4px 4px;
        z-index: 10;
        ${backgroundStyle};
      }
    `}</style>
  </header>
);

const HeaderBig = () => (
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
        width: 98%;
        height: 50px;
        position: fixed;
        left: -20px;
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
);

export default () => (
  <MediaQueryConsumer>
    {({ isMobile, isTablet }) =>
      isMobile || isTablet ? <HeaderMobile /> : <HeaderBig />
    }
  </MediaQueryConsumer>
);
