import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import Reasons from "../components/Reasons";
import InsideTheBox from "../components/Inside";
import { useEffect, useState } from "react";
import Revenues from "../components/Revenues";
import { useSelector } from "react-redux";
import { userSelector } from "../components/ducks/user";

export default function Home() {
  const [revenues, setRevenues] = useState(null);
  const fetchData = async () => {
    const response = await fetch("api/revenues");

    const revenuesData = await response.json();

    setRevenues(revenuesData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Hero />

      <main className={styles.main}>
        <Reasons />

        <InsideTheBox />

        <Revenues revenues={revenues} />
      </main>
    </>
  );
}
