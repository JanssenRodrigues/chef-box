import { useEffect, useState } from "react";
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import styles from "../../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  action,
  fetchPreferences,
  savePreferences,
  userSelector,
} from "../../components/ducks/user";
import { Router, useRouter } from "next/router";

export default function UserPreferences() {
  const router = useRouter();
  const { userData, isLogged, preferences } = useSelector(userSelector);
  const {
    onivora = false,
    alimentosLacteos = false,
    amendoimOleaginosos = false,
    frutosDoMar = false,
    gluten = false,
    vegetariana = false,
    lactose = false,
    vegana = false,
    ovos = false,
    ovolactovegetariana = false,
  } = preferences;

  const dispatch = useDispatch();

  const onChange = (checked) => {
    dispatch(action("USER_PREFERENCES", { ...preferences, ...checked }));
  };

  useEffect(() => {
    if (!isLogged) {
      router.push("/");
    }
    if (userData?.id) {
      dispatch(fetchPreferences(userData.id));
    }
  }, []);

  return (
    <main className={styles.main}>
      <section className={styles.preferences}>
        <h2>Conte um pouco sobre você!</h2>
        <div className={styles.preferencesOptions}>
          <p>Quais os tipos de alimentação que você prefere?</p>
          <FormGroup className={styles.formGroup}>
            <FormControlLabel
              className={styles.checkbox}
              control={
                <Checkbox
                  onChange={({ target }) => {
                    onChange({ onivora: target.checked });
                  }}
                  checked={onivora}
                />
              }
              label="Onívora"
            />
            <FormControlLabel
              className={styles.checkbox}
              control={
                <Checkbox
                  onChange={({ target }) =>
                    onChange({ vegetariana: target.checked })
                  }
                  checked={vegetariana}
                />
              }
              label="Vegetariana"
            />
            <FormControlLabel
              className={styles.checkbox}
              control={
                <Checkbox
                  onChange={({ target }) =>
                    onChange({ vegana: target.checked })
                  }
                  checked={vegana}
                />
              }
              label="Vegana"
            />
            <FormControlLabel
              className={styles.checkbox}
              control={
                <Checkbox
                  onChange={({ target }) =>
                    onChange({ ovolactovegetariana: target.checked })
                  }
                  checked={ovolactovegetariana}
                />
              }
              label="Ovolactovegetariana"
            />
          </FormGroup>
        </div>

        <div className={styles.preferencesOptions}>
          <p>Você possui algum tipo de alergia alimentar?</p>
          <FormGroup className={styles.formGroup}>
            <FormControlLabel
              className={styles.checkbox}
              control={
                <Checkbox
                  onChange={({ target }) =>
                    onChange({ frutosDoMar: target.checked })
                  }
                  checked={frutosDoMar}
                />
              }
              label="Frutos do mar"
            />
            <FormControlLabel
              className={styles.checkbox}
              control={
                <Checkbox
                  onChange={({ target }) =>
                    onChange({ alimentosLacteos: target.checked })
                  }
                  checked={alimentosLacteos}
                />
              }
              label="Alimentos lácteos"
            />
            <FormControlLabel
              className={styles.checkbox}
              control={
                <Checkbox
                  onChange={({ target }) => onChange({ ovos: target.checked })}
                  checked={ovos}
                />
              }
              label="Ovos"
            />
            <FormControlLabel
              className={styles.checkbox}
              control={
                <Checkbox
                  onChange={({ target }) =>
                    onChange({ amendoimOleaginosos: target.checked })
                  }
                  checked={amendoimOleaginosos}
                />
              }
              label="Amendoim e/ou oleaginosos"
            />
          </FormGroup>
        </div>

        <div className={styles.preferencesOptions}>
          <p>Você possui algum tipo de intolerância alimentar?</p>
          <FormGroup className={styles.formGroup}>
            <FormControlLabel
              className={styles.checkbox}
              control={
                <Checkbox
                  onChange={({ target }) =>
                    onChange({ gluten: target.checked })
                  }
                  checked={gluten}
                />
              }
              label="Glúten"
            />
            <FormControlLabel
              className={styles.checkbox}
              control={
                <Checkbox
                  onChange={({ target }) =>
                    onChange({ lactose: target.checked })
                  }
                  checked={lactose}
                />
              }
              label="Lactose"
            />
          </FormGroup>
        </div>
        <Button
          className={styles.formButton}
          variant="contained"
          disabled={!isLogged}
          onClick={() =>
            dispatch(
              savePreferences({
                userId: userData.id,
                preferences: JSON.stringify(preferences),
                method: "PATCH",
              })
            )
          }
        >
          Salvar
        </Button>
      </section>
    </main>
  );
}
