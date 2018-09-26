import Layout from "../components/Layout";
import uiComponents from "../components/ui";
import PaperPage from "../components/blog/PaperPage";
import BlogContent from "./blog.mdx";

export default () => (
  <Layout>
    <PaperPage>
      <BlogContent components={uiComponents} />
    </PaperPage>
  </Layout>
);
