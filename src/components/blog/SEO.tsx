import Head from 'next/head';
import { FC } from 'react';

export interface SeoProps {
  pageTitle: string;
  pageDescription: string;
}

const SEO: FC<SeoProps> = ({ pageTitle, pageDescription }) => (
  <Head>
    <title>{pageTitle}</title>

    <meta
      name="description"
      content={pageDescription}
    />
    <meta
      name="keywords"
      content="knjige, čitanje, recenzije, blog, čitalo books, čitalo, books"
    />
    <meta charSet="utf-8" />
    <meta
      name="author"
      content="Čitalo"
    />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
  </Head>
);

export default SEO;
