export default ({ children }) => (
  <main>
    <div className="alice-background">{children}</div>
    <style jsx>{`
      main {
        margin-top: 64px;
        color: #354751;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .alice-background {
        background-color: #f4eee2;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%2367696e' fill-opacity='0.13' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
        transform: rotate(3.3deg);
        width: 724px;
        box-shadow: rgba(0, 0, 0, 0.1) 4px 4px 8px;
        padding-bottom: 128px;
      }
    `}</style>
  </main>
);
