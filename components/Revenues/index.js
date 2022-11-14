import styles from "../../styles/Home.module.css";

const Revenues = ({ revenues }) => {
  if (!revenues) {
    return null;
  }
  return (
    <section className={styles.articlesSection}>
      <h2 className={styles.articlesTitle}>Receitas</h2>
      {revenues.map((revenue) => (
        <a
          key={revenue.description.title}
          className={styles.article}
          href={`revenue/${revenue.url}`}
        >
          <img src={revenue.description.img} alt="" />
          <span>{revenue.description.title}</span>
        </a>
      ))}
    </section>
  );
};

export default Revenues;
