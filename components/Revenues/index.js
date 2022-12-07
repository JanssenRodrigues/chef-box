import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/Home.module.css";
import { getAllRevenues, revenuesSelector } from "../ducks/revenues";

const Revenues = () => {
  const dispatch = useDispatch();
  const { list } = useSelector(revenuesSelector);

  useEffect(() => {
    dispatch(getAllRevenues());
  }, []);

  if (!list) {
    return null;
  }

  return (
    <section className={styles.articlesSection}>
      <h2 className={styles.articlesTitle}>Receitas</h2>
      {list.map((revenue) => {
        const { description, url } = JSON.parse(revenue.content);
        return (
          <Link
            key={description.title}
            className={styles.article}
            href={`revenue/${url}`}
          >
            <img src={description.img} alt="" />
            <span>{description.title}</span>
          </Link>
        );
      })}
    </section>
  );
};

export default Revenues;
