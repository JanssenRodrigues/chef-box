import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import {
  getRevenueByUrl,
  revenuesSelector,
} from "../../components/ducks/revenues";
import { useDispatch, useSelector } from "react-redux";

const Revenue = () => {
  const dispatch = useDispatch();
  const { article } = useSelector(revenuesSelector);
  const router = useRouter();

  useEffect(() => {
    if (router.query.id) {
      dispatch(getRevenueByUrl(router.query.id));
    }
  }, [router.query.id]);

  if (!article) {
    return <div>ERROR</div>;
  }
  const { description, ingredients, preparation } = JSON.parse(article.content);

  return (
    <div className={styles.revenue}>
      <div className={styles.revenueDescription}>
        <h1>{description.title.toUpperCase()}</h1>
        <p>{description.text}</p>
      </div>
      <div className={styles.revenueIngredients}>
        <h2>Ingredientes</h2>
        <ul>
          {ingredients.map(({ name, qtt }) => {
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
          {preparation.map((step, key) => {
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
