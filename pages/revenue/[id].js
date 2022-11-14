import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

const Revenue = () => {
  const [revenue, setRevenue] = useState(null);
  const router = useRouter();

  const fetchData = async () => {
    const response = await fetch(`/api/revenue/${router.query.id}`);

    const revenueData = await response.json();

    setRevenue(revenueData);
    return;
  };

  useEffect(() => {
    if (router.query.id) {
      fetchData();
    }
  }, [router.query.id]);

  if (!revenue) {
    return <div>ERROR</div>;
  }

  return (
    <div className={styles.revenue}>
      <div className={styles.revenueDescription}>
        <h1>{revenue.description.title.toUpperCase()}</h1>
        <p>{revenue.description.text}</p>
      </div>
      <div className={styles.revenueIngredients}>
        <h2>Ingredientes</h2>
        <ul>
          {revenue.ingredients.map(({ name, qtt }) => {
            return (
              <li
                key={name}
                className={styles.revenueIngredient}
              >{`${qtt} de ${name}`}</li>
            );
          })}
        </ul>
      </div>
      <div className={styles.revenuePreparation}>
        <h2>Modo de preparo</h2>
        <ul>
          {revenue.preparation.map((step, key) => {
            return (
              <li key={key}>
                <span className={styles.revenueOrder}>{key + 1}</span>
                {step}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Revenue;
