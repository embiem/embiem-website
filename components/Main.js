import * as colors from "../utils/colors";

export default ({ children }) => (
  <main>
    {children}
    <style jsx>{`
      main {
        margin-top: 64px;
        color: ${colors.primary};
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `}</style>
  </main>
);
