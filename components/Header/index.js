import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import BlenderSharpIcon from "@mui/icons-material/BlenderSharp";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

const Header = ({ isLogged, userLogin, setIsOpenLoginModal }) => {
  const renderLogin = () => {
    if (isLogged) {
      return (
        <ul>
          <li>{`Olá,  ${userLogin}`}</li>
        </ul>
      );
    }
    return (
      <Button
        className={styles.loginButton}
        variant="contained"
        onClick={() => setIsOpenLoginModal(true)}
      >
        Login
      </Button>
    );
  };

  return (
    <header className={styles.header}>
      <Link href="/">
        <Icon component={BlenderSharpIcon} fontSize="large" href="/" />
      </Link>

      <Link href="/">
        <span className={styles.headerTitle}>Chef Box</span>
      </Link>

      {renderLogin()}
    </header>
  );
};

export default Header;
