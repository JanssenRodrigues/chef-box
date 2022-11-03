import React from "react";
import styles from "../../styles/Home.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>Criado por ChefBox© {new Date().getFullYear()}</span>
    </footer>
  );
};

export default Footer;
