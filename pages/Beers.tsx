import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import { request, gql } from "graphql-request";

const gqlUrl =
  "https://api-eu-central-1.graphcms.com/v2/cl3cteb7h17j201xngosfceln/master";
const query = gql`
  query {
    products {
      id
      name
      description
    }
  }
`;
export async function getServerSideProps() {
  const data = await request(gqlUrl, query);
  return {
    props: {
      products: data.products,
    },
  };
}

const Home: NextPage = ({ products }) => {
  console.log(products);
  return (
    <div className={styles.container}>
      <Head>
        <title>Thebeerlvl</title>
        <meta
          name="description"
          content="a place for all the beer lovers out there"
        />
        <link rel="icon" href="/Biersal_Logo.jpg" />
      </Head>

      <main className={styles.main}>
        <motion.nav className={styles.mainnav} id="menu-style">
          <ul>
            <Link href="/">
              <motion.a whileHover={{ scale: 1.1 }}>
                <li>Home</li>
              </motion.a>
            </Link>
            <div id="menu-line"></div>
            <Link href="/Labels">
              <a>
                <li>Labels</li>
              </a>
            </Link>
            <div id="menu-line"></div>
            <Link href="/">
              <a>
                <li>Beers and reviews</li>
              </a>
            </Link>
            <div id="menu-line"></div>
            <Link href="/List">
              <a>
                <li>Mikes lists</li>
              </a>
            </Link>
          </ul>
        </motion.nav>

        <motion.h1
          animate={{ x: [-1000, 0] }}
          transition={{ ease: "easeOut", duration: 3 }}
          className={styles.title}
          id="initial-pos"
        >
          Welcome to...
        </motion.h1>
        <motion.span
          animate={{ x: [1000, 0] }}
          transition={{ ease: "easeOut", duration: 3 }}
          id="Thebeerlvl"
          className={styles.title}
        >
          Thebeerlvl
        </motion.span>

        <p className={styles.description}>
          This part as many others are thought to have continious development{" "}
        </p>
      </main>

      <footer className={styles.footer}>
        <motion.a
          href="https://instagram.com/thebeerlvl?igshid=YmMyMTA2M2Y="
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ rotate: 90, scale: 0.75 }}
        >
          {" "}
          <span className={styles.logo}>
            <Image
              src="/Biersal_Logo.jpg"
              alt="Biersal Logo"
              width={300}
              height={300}
            />
          </span>
        </motion.a>
      </footer>
    </div>
  );
};

export default Home;
