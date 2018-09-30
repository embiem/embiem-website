import Head from "next/head";

export default ({ title, description, image, url }) => (
  <Head>
    <meta name="twitter:site" content="@em_bi_em" />
    {title && <title>{title}</title>}
    {title && <meta name="og:title" content={title} />}
    {url && <meta name="og:url" content={url} />}
    {description && <meta name="description" content={description} />}
    {description && <meta name="og:description" content={description} />}
  </Head>
);
