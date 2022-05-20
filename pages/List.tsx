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
query{
    recomendations{
      title
      content
    }
}
  
  
`;
export async function getServerSideProps() {
  const data = await request(gqlUrl, query);
  console.log(data)
  return {
    props: {
        recomendations: data.recomendations,
    },
  };
}




const Home: NextPage = ({recomendations}) => {
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
        </nav>
        <div>
        <div>
      {recomendations.map((recomendation) => (
        <div>
            <h1 className={styles.title}>{recomendation.title}</h1>
          <p>{recomendation.content}</p>
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
