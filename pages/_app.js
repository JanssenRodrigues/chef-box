import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getLocalStorageData } from "../utils";
import "../styles/globals.css";
import LoginModal from "../components/LoginModal";

import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
// import { initStore } from "../store";
import rootReducer from "../reducers";
import { createStore } from "redux";

const store = createStore(rootReducer);

import { storeWrapper } from "../store";

const MyApp = ({ Component, ...rest }) => {
  const { store, props } = storeWrapper.useWrappedStore(rest);
  const [isLogged, setIsLogged] = useState(false);
  const [userLogin, setUserLogin] = useState("");
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  useEffect(() => {
    // setIsLogged(getLocalStorageData("isLogged") ?? false);
    // setUserLogin(getLocalStorageData("userLogin") ?? "");
  }, []);

  return (
    <Provider store={store}>
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
        {...props}
        isLogged={isLogged}
        setIsOpenLoginModal={setIsOpenLoginModal}
      />

      <Footer />
    </Provider>
  );
};

export default storeWrapper.withRedux(MyApp);
