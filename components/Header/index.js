import React from "react";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import BlenderSharpIcon from "@mui/icons-material/BlenderSharp";
import styles from "../../styles/Home.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Icon component={BlenderSharpIcon} fontSize="large" />

      <span className={styles.headerTitle}>Chef Box</span>

      <Button className={styles.loginButton} variant="contained">
        Login
      </Button>
    </header>
  );
};

export default Header;
