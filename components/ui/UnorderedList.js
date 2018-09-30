export default ({ children }) => (
    <ul>
      {children}
      <style jsx>{`
        ul {
          padding: 0 64px;
          transform: rotate(-4.6deg);
          list-style-image: url('/static/images/squirrel.png');
        }
      `}</style>
    </ul>
  );
  