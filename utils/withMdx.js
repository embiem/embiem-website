import { MDXProvider } from "@mdx-js/tag";
import uiComponents from "../components/ui";
import Layout from "../components/Layout";
import PaperPage from "../components/blog/PaperPage";

export default meta => ({ children }) => {
  return (
    <MDXProvider components={uiComponents}>
      <Layout>
        <PaperPage>
          <content>{children}</content>
        </PaperPage>
      </Layout>
    </MDXProvider>
  );
};
