import * as colors from "../utils/colors";

export default ({ children }) => (
  <main>
    {children}
    <style jsx>{`
      main {
        margin-top: 96px;
        color: ${colors.primary};
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      @media (max-width: 960px) {
        main {
          margin-top: 64px;
        }
      }
    `}</style>
  </main>
);
