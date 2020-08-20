import Head from "next/head";
import Layout from "../components/common/layout";
import Books from "../components/books";
import { getBooks } from "../lib/data";

function Home({ props }) {
  return (
    <Layout>
      <Head>
        <title>Firebase Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Books props={props} />
    </Layout>
  );
}

Home.getInitialProps = async () => {
  const data = await getBooks();

  return { props: data };
};

export default Home;
