export default () => (
  <header>
    <a>Home</a>
    <a>Blog</a>
    <style jsx>{`
      header {
        background: #fafafa;
        width: 53%;
        height: 50px;
        position: relative;
        left: -20px;
        top: 32px;
        transform: rotate(-1.36deg);
        box-shadow: rgba(0, 0, 0, 0.25) 4px 4px 4px;
        z-index: 10;
      }

      header a {
        display: inline-block;
        font-family: "M PLUS Rounded 1c", sans-serif;
        font-weight: bold;
        font-size: 24px;
        color: #354751;
      }

      header a:nth-of-type(1) {
        position: relative;
        left: 71px;
        top: 4px;
        transform: rotate(-11.4deg);
      }

      header a:nth-of-type(2) {
        position: relative;
        left: 178px;
        top: 6px;
        transform: rotate(-15deg);
      }
    `}</style>
  </header>
);
