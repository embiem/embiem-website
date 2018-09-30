import Link from "next/link";
import faker from "faker";
import parse from "date-fns/parse";

import Layout from "../components/Layout";
import PostPreview from "../components/blog/PostPreview";
import { posts } from "./blog/index.js";

posts.sort(function(a, b) {
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return new Date(b.date) - new Date(a.date);
});

export default class extends React.Component {
  render() {
    return (
      <Layout>
        <div className="spacer" />
        <div className="blog-posts">
          {posts.map(post => (
            <React.Fragment>
              <Link
                href={post.link}
              >
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
