import React from "react";
import styles from "../../styles/Home.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <span className={styles.strawberry} />
      <span className={styles.meat} />
      <span className={styles.watermelon} />
      <div className={styles.title}>
        <h1>Seja você o Chef da sua casa</h1>
        <h2 className={styles.subtitle}>Receitas que vão surpreender!</h2>
      </div>
    </div>
  );
};

export default Hero;
