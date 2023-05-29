import type { FC } from "react";
import Head from "next/head";

const Metadata: FC<{ title?: string }> = ({ title }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <title>{`${title ? title + " | " : ""}Jimmy`}</title>
      <meta name="description" content="Jimmy Z" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="/" />
      <meta property="og:title" content="JimeWeb" />
      <meta property="og:description" content="JimeWeb." />
    </Head>
  );
};

export default Metadata;
