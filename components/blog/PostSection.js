export default ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        margin: 16px 64px;
        transform: rotate(-4.4deg);
      }
    `}</style>
  </div>
);
