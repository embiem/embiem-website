import Link from "next/link";

import Layout from "../components/Layout";
import PostPreview from "../components/blog/PostPreview";
import { MediaQueryConsumer } from "../utils/withMediaQuery";

import { meta as metaAutoGenerateSitemapInNextJs } from "./blog/auto-generate-sitemap-in-next-js.mdx";
import { meta as metaWebsiteAndBlogWithNextJs } from "./blog/website-and-blog-with-next-js.mdx";

const posts = [metaAutoGenerateSitemapInNextJs, metaWebsiteAndBlogWithNextJs];

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
          {({ isMobile }) => (isMobile ? null : <div className="spacer" />)}
        </MediaQueryConsumer>

        <div className="blog-posts">
          {posts.map(post => (
            <React.Fragment key={post.link}>
              <Link href={post.link}>
                <a>
                  <PostPreview {...post} />
                </a>
              </Link>
              <div className="spacer" />
            </React.Fragment>
          ))}
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
