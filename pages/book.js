import Head from "next/head";
import Layout from "../components/common/layout";
import Book from "../components/book";
import { getBook } from "../lib/data";

function BookPage({ props }) {
  return (
    <Layout>
      <Head>
        <title>Book | Firebase Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Book props={props} />
    </Layout>
  );
}

BookPage.getInitialProps = async ({ query }) => {
  const data = await getBook(query.id);

  return { props: data };
};

export default BookPage;
