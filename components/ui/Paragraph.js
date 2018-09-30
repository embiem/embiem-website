export default ({ children }) => (
  <p>
    {children}
    <style jsx>{`
      p {
        padding: 0 64px;
        transform: rotate(-4.4deg);

        font-family: "Rubik", sans-serif;
        font-size: 18px;
        line-height: 34px;
        letter-spacing: 0.7px;
      }
    `}</style>
  </p>
);
