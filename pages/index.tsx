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
        <nav className={styles.mainnav}>
          <ul>
            <Link href="/">
              <a>
                <li>Home</li>
              </a>
            </Link>
            <div id="menu-line"></div>
            <Link href="/Labels">
              <a>
                <li>Labels</li>
              </a>
            </Link>
            {" / "}
            <Link href="/">
              <a>
                <li>Beers add comments and stars</li>
              </a>
            </Link>
            {" / "}
            <Link href="/">
              <a>
                <li>Mikes lists</li>
              </a>
            </Link>
          </ul>
        </nav>

        <h1 className={styles.title}>Welcome to...</h1>
        <span id="Thebeerlvl" className={styles.title} >Thebeerlvl</span>

        <p className={styles.description}>
          Currently our team is working hard to genarate more content. Meanwhile
          enjoy the page{" "}
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
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
