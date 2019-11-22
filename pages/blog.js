import Link from "next/link";
import { Trail } from "react-spring";
import Layout from "../components/Layout";
import PostPreview from "../components/blog/PostPreview";
import { MediaQueryConsumer } from "../utils/withMediaQuery";

import { meta as metaMLToFilterMessages } from "./blog/use-machine-learning-to-filter-messages-in-the-browser.mdx";
import { meta as metaAutoGenerateSitemapInNextJs } from "./blog/auto-generate-sitemap-in-next-js.mdx";

const posts = [metaMLToFilterMessages, metaAutoGenerateSitemapInNextJs];

posts.sort(function(a, b) {
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return new Date(b.date) - new Date(a.date);
});

export default class extends React.Component {
  render() {
    return (
      <Layout>
        <MediaQueryConsumer>
          {({ isMobile, isTablet }) =>
            isMobile || isTablet ? null : <div className="spacer" />
          }
        </MediaQueryConsumer>

        <div className="blog-posts">
          <Trail
            items={posts}
            keys={post => post.link}
            from={{
              transform: `translate3d(0,-30px,0) rotateZ(${Math.random() * 5 -
                2.5}deg)`
            }}
            to={{ transform: "translate3d(0,0px,0) rotateZ(0deg)" }}
          >
            {post => props => (
              <div style={props}>
                <Link href={post.link}>
                  <a>
                    <PostPreview {...post} />
                  </a>
                </Link>
                <div className="spacer" />
              </div>
            )}
          </Trail>
        </div>
        <style jsx>{`
          .spacer {
            height: 55px;
          }
          .blog-posts {
            display: flex;
            flex-direction: column;
            max-width: 600px;
          }

          a {
            color: inherit;
            text-decoration: none;
          }
        `}</style>
      </Layout>
    );
  }
}
