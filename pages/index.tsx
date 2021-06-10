import Head from 'next/head';
import styles from '../styles/Home.module.css';
import CustomCarousel from '../components/Carousel/CustomCarousel';
import { gql, useQuery } from '@apollo/client';
import { initializeApollo, addApolloState } from '../apollo-client';
import { typeFromAST } from 'graphql';

const GET_PROMOTED_PRODUCTS = gql`
query getPromotedProducts {
  getPromotedProducts {
    name
  }
}
`;

export default function Home(): JSX.Element {
  let bob;
  if(typeof(window) !== 'undefined') {
    console.log(true);
    bob = useQuery(GET_PROMOTED_PRODUCTS, {});
  } else
    console.log(false);

  console.log(bob?.data)
  return (
    <div className={styles.container}>
      <Head>
        <title>PC-EShop</title>
        <meta name="description" content="Buy Desktop PCs, Laptops, and loads of accessories, all in one place." />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#1765e3"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Hello, World!
        {/* <CustomCarousel props={useQuery(GET_PROMOTED_PRODUCTS, {})} /> */}
      </main>

      <footer className={styles.footer}>
        Hello, Footer!
      </footer>
    </div>
  );
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.readQuery({
    query: GET_PROMOTED_PRODUCTS,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
}
