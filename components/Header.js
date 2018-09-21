import Link from "next/link";

const NavLink = ({ text, href }) => <Link href={href}>{text}</Link>;

export default () => (
  <header>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/blog">
      <a>Blog</a>
    </Link>
    <style jsx global>{`
      header {
        background: #fafafa;
        width: 53%;
        height: 50px;
        position: fixed;
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
        text-decoration: none;
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
