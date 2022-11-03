import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getLocalStorageData } from "../utils";
import "../styles/globals.css";
import LoginModal from "../components/LoginModal";

function MyApp({ Component, pageProps }) {
  const [data, setData] = useState({});
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

  useEffect(() => {
    setData(getLocalStorageData());
  }, [data]);
  return (
    <>
      <Head>
        <title>ChefBox</title>
        <meta name="description" content="ChefBox" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoginModal open={isOpenLoginModal} handleClose={setIsOpenLoginModal} />

      <Header
        isLogged={data.isLogged}
        userLogin={data.login}
        setIsOpenLoginModal={setIsOpenLoginModal}
      />
      <Component {...pageProps} />

      <Footer />
    </>
  );
}

export default MyApp;
