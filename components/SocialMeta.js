import Head from "next/head";

export default ({ title, description, image, url }) => (
  <Head>
    <meta key="twitter:site" name="twitter:site" content="@em_bi_em" />
    {title && <title key="title">{title}</title>}
    {title && <meta key="og:title" name="og:title" content={title} />}
    {url && <meta key="og:url" name="og:url" content={url} />}
    {description && (
      <meta key="description" name="description" content={description} />
    )}
    {description && (
      <meta key="og:description" name="og:description" content={description} />
    )}
  </Head>
);
