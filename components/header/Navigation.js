/* 
.  .               ,        
|\ | _..  ,* _  _.-+-* _ ._ 
| \|(_] \/ |(_](_] | |(_)[ )
            ._|             
 */

import Link from "next/link";
import * as colors from "../../utils/colors";

export default props => (
  <nav {...props}>
    <Link href="/">
      <a>About</a>
    </Link>
    <Link href="/blog">
      <a>Blog</a>
    </Link>
    <style jsx>{`
      nav {
        height: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: space-around;
      }

      a {
        width: 100%;
        text-align: center;
        color: ${colors.primary};
        text-decoration: none;
        transition: all 0.2s;
      }

      a:hover {
        transform: scale(1.1) rotate(2deg);
      }
    `}</style>
  </nav>
);
