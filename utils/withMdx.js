import { MDXProvider } from "@mdx-js/tag";
import uiComponents from "../components/ui";
import Layout from "../components/Layout";
import PaperPage from "../components/blog/PaperPage";
import SocialMeta from "../components/SocialMeta";

export default meta => ({ children }) => {
  return (
    <MDXProvider components={uiComponents}>
      <Layout>
        <SocialMeta {...meta} />
        <PaperPage>
          <content>
            <uiComponents.h1>{meta.title}</uiComponents.h1>
            {children}
          </content>
        </PaperPage>
      </Layout>
    </MDXProvider>
  );
};
