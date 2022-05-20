import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import { request, gql } from "graphql-request";

const gqlUrl =
  "https://api-eu-central-1.graphcms.com/v2/cl3d9jwsl203y01xn0xvp8wr1/master";
const query = gql`
  query {
    lables {
      title
      image {
        url
      }
    }
  }
`;
export async function getServerSideProps() {
  const data = await request(gqlUrl, query);
  console.log(data);
  return {
    props: {
      lables: data.lables,
    },
  };
}

const Home: NextPage = ({ lables }) => {
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
        <nav className={styles.mainnav} id="menu-style">
          <ul>
            <Link href="/">
              <motion.a whileHover={{ scale: 1.1 }}>
                <li>Home</li>
              </motion.a>
            </Link>
            <div id="menu-line"></div>
            <Link href="/Labels">
              <motion.a whileHover={{ scale: 1.1 }}>
                <li>Labels</li>
              </motion.a>
            </Link>
            <div id="menu-line"></div>
            <Link href="/Beers">
              <motion.a whileHover={{ scale: 1.1 }}>
                <li>Beers and reviews</li>
              </motion.a>
            </Link>
            <div id="menu-line"></div>
            <Link href="/List">
              <motion.a whileHover={{ scale: 1.1 }}>
                <li>Mikes lists</li>
              </motion.a>
            </Link>
          </ul>
        </nav>
        <div>
          <div>
            {lables.map((lable) => (
              <div className={styles.grid}>
                <span className={styles.card}>{lable.title}</span>
                <span>{lable.image.url}</span>
              </div>
            ))}
          </div>
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
