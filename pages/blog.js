import Layout from "../components/Layout";
import PaperPage from "../components/PaperPage";
import BlogContent from "./blog.mdx";
import uiComponents from "../components/ui";

export default () => (
  <Layout>
    <PaperPage>
      <BlogContent components={uiComponents} />
    </PaperPage>
  </Layout>
);
