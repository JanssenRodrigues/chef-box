import React from "react";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import BlenderSharpIcon from "@mui/icons-material/BlenderSharp";
import styles from "../../styles/Home.module.css";
import { getLocalStorageData } from "../../utils";
import Link from "next/link";

const Header = ({ isLogged = false, userLogin, setIsOpenLoginModal }) => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Icon component={BlenderSharpIcon} fontSize="large" href="/" />
      </Link>

      <Link href="/">
        <span className={styles.headerTitle}>Chef Box</span>
      </Link>

      {!isLogged ? (
        <Button
          className={styles.loginButton}
          variant="contained"
          onClick={() => setIsOpenLoginModal(true)}
        >
          Login
        </Button>
      ) : (
        <p>{`Olá,  ${userLogin}`}</p>
      )}
    </header>
  );
};

export default Header;
