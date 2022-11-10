import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getLocalStorageData } from "../utils";
import "../styles/globals.css";
import LoginModal from "../components/LoginModal";

function MyApp({ Component, pageProps }) {
  const [isLogged, setIsLogged] = useState(false);
  const [userLogin, setUserLogin] = useState("");
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

  useEffect(() => {
    setIsLogged(getLocalStorageData("isLogged") ?? false);
    setUserLogin(getLocalStorageData("userLogin") ?? "");
  }, []);

  return (
    <>
      <Head>
        <title>ChefBox</title>
        <meta name="description" content="ChefBox" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoginModal
        open={isOpenLoginModal}
        handleClose={setIsOpenLoginModal}
        setIsLogged={setIsLogged}
        setUserLogin={setUserLogin}
      />

      <Header
        isLogged={isLogged}
        userLogin={userLogin}
        setIsOpenLoginModal={setIsOpenLoginModal}
      />

      <Component
        {...pageProps}
        isLogged={isLogged}
        setIsOpenLoginModal={setIsOpenLoginModal}
      />

      <Footer />
    </>
  );
}

export default MyApp;
