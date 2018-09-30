export const h1 = ({ children }) => (
  <h1>
    {children}
    <div className="spacer"></div>
    <hr />
    <style jsx>{`
      h1 {
        text-align: center;
        font-size: 1.8em;
        padding: 24px;
        transform: rotate(-7.1deg);
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
);

export const h2 = ({ children }) => (
  <h2>
    {children}
    <style jsx>{`
      h2 {
        padding: 0 24px;
        transform: rotate(-5.4deg);
      }
    `}</style>
  </h2>
);
