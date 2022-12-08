import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import {
  getArticleReviews,
  getRevenueByUrl,
  getUserReview,
  revenuesSelector,
  saveReview,
} from "../../components/ducks/revenues";
import { useDispatch, useSelector } from "react-redux";
import { Button, Rating, TextField } from "@mui/material";
import { userSelector } from "../../components/ducks/user";

const Revenue = () => {
  const [rate, setRate] = useState(null);
  const [textarea, setTextarea] = useState("");

  const router = useRouter();
  const dispatch = useDispatch();
  const { article, userReview, reviews } = useSelector(revenuesSelector);
  const user = useSelector(userSelector);

  useEffect(() => {
    if (router.query.id) {
      dispatch(getRevenueByUrl(router.query.id));
    }
    if (user && article) {
      dispatch(
        getUserReview({
          articleId: article.id,
          username: user.userData.username,
        })
      );
    }
  }, [router.query.id]);

  // useEffect(() => {
  //   if (article) {
  //     dispatch(
  //       getArticleReviews({
  //         articleId: article.id,
  //       })
  //     );
  //   }
  // }, []);

  if (!article) {
    return null;
  }

  const { description, ingredients, preparation } = JSON.parse(
    article?.content
  );

  console.log("REVIEWS: ", reviews);

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
      {console.log("USER REVIEW: ", userReview)}
      {userReview === null && user.isLogged && (
        <div className={styles.revenueReviews}>
          <h2>Avaliar receita</h2>
          <Rating
            name="simple-controlled"
            value={rate}
            onChange={(event, newValue) => {
              setRate(newValue);
            }}
          />
          <br />
          <br />
          <TextField
            id="outlined-multiline-static"
            label="Comentário"
            multiline
            rows={4}
            value={textarea}
            onChange={(e) => setTextarea(e.target.value)}
          />
          <br />
          <br />
          <Button
            variant="contained"
            onClick={() =>
              dispatch(
                saveReview({
                  rate,
                  comment: textarea,
                  articleId: article.id,
                  username: user.userData.username,
                })
              )
            }
          >
            Enviar avaliação
          </Button>
        </div>
      )}

      {reviews.length > 0 && (
        <div className={styles.revenueReviews}>
          <h2>Avaliações</h2>
          <ul>
            {reviews.map((review, key) => {
              return (
                <li key={key}>
                  <strong>{review.username}</strong>
                  <Rating name="readOnly" readOnly value={review.rate} />
                  <br />
                  <span>{review.comment}</span>
                  <br />
                  <br />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Revenue;
