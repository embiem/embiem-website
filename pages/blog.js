import Layout from "../components/Layout";
import BlogContent from "./blog.mdx";
import uiComponents from "../components/ui";

export default () => (
  <Layout>
    <BlogContent components={uiComponents} />
  </Layout>
);
