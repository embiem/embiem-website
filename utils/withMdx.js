import dynamic from "next/dynamic";
import { MDXProvider } from "@mdx-js/tag";
import uiComponents from "../components/ui";
import Layout from "../components/Layout";
import PaperPage from "../components/blog/PaperPage";
import SocialMeta from "../components/SocialMeta";
import IconLink from "../components/interaction/IconLink";
import PostSection from "../components/blog/PostSection";

/* const Comments = dynamic(() => import("../components/blog/Comments"), {
  ssr: false
}); */

export default meta => ({ children }) => (
  <MDXProvider components={uiComponents}>
    <Layout>
      <SocialMeta {...meta} />
      <PaperPage>
        <content>
          <uiComponents.h1>{meta.title}</uiComponents.h1>
          {children}
          <PostSection>
            <IconLink
              href="https://www.linkedin.com/in/mbeierling/"
              iconSrc={require("../images/icons/iconmonstr-linkedin-3.svg")}
              text="Linkedin"
            />
            <IconLink
              href="https://twitter.com/em_bi_em"
              iconSrc={require("../images/icons/Twitter_Logo_Blue.svg")}
              text="Twitter"
            />
            <IconLink
              href="https://dev.to/embiem"
              iconSrc={require("../images/icons/dev-badge.svg")}
              text="DEV.to"
            />
            <IconLink
              href="https://keybase.io/mbeierling"
              iconSrc={require("../images/icons/keybase-icon.svg")}
              text="Keybase"
            />
          </PostSection>
        </content>
      </PaperPage>
    </Layout>
  </MDXProvider>
);
