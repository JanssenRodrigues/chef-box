import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import Reasons from "../components/Reasons";
import InsideTheBox from "../components/Inside";
import Revenues from "../components/Revenues";

export default function Home() {
  return (
    <>
      <Hero />

      <main className={styles.main}>
        <Reasons />

        <InsideTheBox />

        <Revenues />
      </main>
    </>
  );
}
