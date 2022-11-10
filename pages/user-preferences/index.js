import { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Link,
} from "@mui/material";
import { getLocalStorageData, setLocalStorageData } from "../../utils";
import styles from "../../styles/Home.module.css";

export default function UserPreferences({ setIsOpenLoginModal }) {
  const [userPreferences, setUserPreferences] = useState({});

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
  } = userPreferences;

  const onChange = (checked) => {
    setUserPreferences({
      ...userPreferences,
      ...checked,
    });
    setLocalStorageData(
      "userPreferences",
      JSON.stringify({
        ...userPreferences,
        ...checked,
      })
    );
  };

  useEffect(() => {
    const localStorageData = getLocalStorageData("userPreferences");
    if (localStorageData) {
      setUserPreferences(JSON.parse(localStorageData));
    }
    if (!getLocalStorageData("isLogged")) {
      setIsOpenLoginModal(true);
    }
  }, []);

  return (
    <main className={styles.main}>
      <h2>Conte um pouco sobre você!</h2>
      <section className={styles.preferences}>
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
        <Link href="/">
          <Button className={styles.formButton} variant="contained">
            Salvar
          </Button>
        </Link>
      </section>
    </main>
  );
}
