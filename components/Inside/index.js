import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import styles from "../../styles/Home.module.css";

const InsideTheBox = () => {
  return (
    <section className={styles.insideTheBoxSection}>
      <div className={styles.insideTheBoxText}>
        <h2>O que vem dentro da ChefBox?</h2>
        <ul>
          <li className={styles.listItem}>
            Ingredientes frescos, de qualidade e separados um a um para agradar
            o seu paladar
          </li>
          <li className={styles.listItem}>
            Instruções de fácil entendimento para cada receita enviada
          </li>
          <li className={styles.listItem}>
            Uma experiência que fará você não querer sair da cozinha
          </li>
          <li className={styles.listItem}>
            Caixas decoradas diferentes todos os meses
          </li>
        </ul>
        <Link href="/checkout">
          <Button variant="outlined">Conheça nossos planos</Button>
        </Link>
      </div>

      <div className={styles.insideTheBoxImage}>
        <img src="/alimentos.png" alt="" />
      </div>
    </section>
  );
};

export default InsideTheBox;
