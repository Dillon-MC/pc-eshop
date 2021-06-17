import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useQuery } from '@apollo/client';
import { initializeApollo, addApolloState } from '../apollo-client';
import CustomCarousel from '../components/Carousel/CustomCarousel';
import TileGrid from '../components/TileGrid/TileGrid';
import Header from '../components/Header/Header';
import { GET_PROMOTED_PRODUCTS } from '../graphql/queries';

export default function Home(): JSX.Element {
  return (
    <div>
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

      <Header />

      <div id={styles.home}>
        <CustomCarousel props={useQuery(GET_PROMOTED_PRODUCTS, {})} />

        <div>
          <legend className="legend_1">Choose a Category</legend>
          <hr />
          <TileGrid tileData={
            [
              {
                title: "Laptops",
                link: "link",
                image: "https://crinix.com.ng/wp-content/uploads/2020/11/9yq59ea.jpg",
                imageWidth: 140,
                gridsize: 6,
              },
              { title: "Desktops", link: "link", gridsize: 6 },
              {
                title: "Accessories",
                link: "link",
                image: "https://images-na.ssl-images-amazon.com/images/I/61mR4-4nu9L._AC_SY450_.jpg",
                imageWidth: 300,
                gridsize: 12
              }
            ]
          } />
        </div>
      </div>
      
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
