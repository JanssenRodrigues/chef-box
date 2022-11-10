import React from "react";
import { Button, Link } from "@mui/material";
import Reason from "../Reason";

import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import SetMealIcon from "@mui/icons-material/SetMeal";

import styles from "../../styles/Home.module.css";

const Reasons = () => {
  return (
    <section className={styles.reasonsSection}>
      <h2 className={styles.reasonsTitle}>Porque escolher a ChefBox?</h2>
      <Reason
        icon={MenuBookIcon}
        text="Receitas escritas por chefs de cozinha ao seu alcance"
      />
      <Reason
        icon={EventAvailableIcon}
        text="Sem surpresas! Receba mensalmente em seu endereço"
      />
      <Reason
        icon={SetMealIcon}
        text="Ingredientes sempre frescos e de qualidade premium"
      />
      <Reason
        icon={RamenDiningIcon}
        text="Receba receitas do mundo inteiro e surpreenda!"
      />
      <div className={styles.reasonsFooter}>
        <Link href="/checkout">
          <Button variant="outlined">Assine já</Button>
        </Link>
      </div>
    </section>
  );
};

export default Reasons;
