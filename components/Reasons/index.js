import React from "react";
import { Button, Link } from "@mui/material";
import Reason from "../Reason";

import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import SetMealIcon from "@mui/icons-material/SetMeal";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
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
        icon={RestaurantMenuIcon}
        text="Receba ingredientes para 3 receitas surpresa aqui do site!"
      />
      <Reason
        icon={SetMealIcon}
        text="Ingredientes sempre frescos e de qualidade premium"
      />
      <Reason
        icon={EventAvailableIcon}
        text="Sem surpresas! Receba mensalmente em seu endereço"
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
