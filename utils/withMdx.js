import dynamic from "next/dynamic";
import { MDXProvider } from "@mdx-js/tag";
import uiComponents from "../components/ui";
import Layout from "../components/Layout";
import PaperPage from "../components/blog/PaperPage";
import SocialMeta from "../components/SocialMeta";

const Comments = dynamic(() => import("../components/blog/Comments"), {
  ssr: false
});

export default meta => ({ children }) => (
  <MDXProvider components={uiComponents}>
    <Layout>
      <SocialMeta {...meta} />
      <PaperPage>
        <content>
          <uiComponents.h1>{meta.title}</uiComponents.h1>
          {children}
        </content>
      </PaperPage>
      <Comments />
    </Layout>
  </MDXProvider>
);
