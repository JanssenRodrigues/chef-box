import { useState } from "react";
import { Provider } from "react-redux";
import { storeWrapper } from "../store";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoginModal from "../components/LoginModal";
import "../styles/globals.css";

const MyApp = ({ Component, ...rest }) => {
  const { store, props } = storeWrapper.useWrappedStore(rest);
  const [isLogged, setIsLogged] = useState(false);
  const [userLogin, setUserLogin] = useState("");
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

  return (
    <Provider store={store}>
      <Head>
        <title>ChefBox</title>
        <meta name="description" content="ChefBox" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoginModal open={isOpenLoginModal} handleClose={setIsOpenLoginModal} />

      <Header setIsOpenLoginModal={setIsOpenLoginModal} />

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
