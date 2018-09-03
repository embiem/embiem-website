export default ({ children }) => (
  <p>
    {children}
    <style jsx>{`
      p {
        position: relative;
        top: 67px;
        left: 85px;
        padding-right: 170px;
        transform: rotate(-4.4deg);

        font-family: "Rubik", sans-serif;
        font-size: 18px;
        line-height: 34px;
        letter-spacing: 0.7px;
      }
    `}</style>
  </p>
);
