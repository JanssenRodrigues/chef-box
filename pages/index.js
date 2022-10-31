import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>ChefBox</title>
        <meta name="description" content="ChefBox" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <Hero />
      </main>
    </>
  );
}
