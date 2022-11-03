import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Reasons from "../components/Reasons";
import InsideTheBox from "../components/Inside";
import Footer from "../components/Footer";
import LoginModal from "../components/LoginModal";
import { getLocalStorageData } from "../utils";

export default function Home() {
  return (
    <>
      <Hero />

      <main className={styles.main}>
        <Reasons />

        <InsideTheBox />
      </main>
    </>
  );
}
