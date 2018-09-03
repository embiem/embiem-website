export default ({ children }) => (
  <h1>
    {children}
    <style jsx>{`
      h1 {
        position: relative;
        top: 35px;
        left: 24px;
        transform: rotate(-7.1deg);

        font-family: "M PLUS Rounded 1c", sans-serif;
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
      }
    `}</style>
  </h1>
);
