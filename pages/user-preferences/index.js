import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import styles from "../../styles/Home.module.css";

export default function UserPreferences() {
  return (
    <main className={styles.main}>
      <h2>Conte um pouco sobre você!</h2>
      <section>
        <div className={styles.preferencesOptions}>
          <p>Quais os tipos de alimentação que você prefere?</p>
          <FormGroup className={styles.formGroup}>
            <FormControlLabel
              className={styles.checkbox}
              control={<Checkbox />}
              label="Onívora"
            />
            <FormControlLabel
              className={styles.checkbox}
              control={<Checkbox />}
              label="Vegetariana"
            />
            <FormControlLabel
              className={styles.checkbox}
              control={<Checkbox />}
              label="Vegana"
            />
            <FormControlLabel
              className={styles.checkbox}
              control={<Checkbox />}
              label="Ovolactovegetariana"
            />
          </FormGroup>
        </div>

        <div className={styles.preferencesOptions}>
          <p>Você possui algum tipo de alergia alimentar?</p>
          <FormGroup className={styles.formGroup}>
            <FormControlLabel
              className={styles.checkbox}
              control={<Checkbox />}
              label="Frutos do mar"
            />
            <FormControlLabel
              className={styles.checkbox}
              control={<Checkbox />}
              label="Alimentos lácteos"
            />
            <FormControlLabel
              className={styles.checkbox}
              control={<Checkbox />}
              label="Ovos"
            />
            <FormControlLabel
              className={styles.checkbox}
              control={<Checkbox />}
              label="Amendoim e/ou oleaginosos"
            />
          </FormGroup>
        </div>

        <div className={styles.preferencesOptions}>
          <p>Você possui algum tipo de intolerância alimentar?</p>
          <FormGroup className={styles.formGroup}>
            <FormControlLabel
              className={styles.checkbox}
              control={<Checkbox />}
              label="Glúten"
            />
            <FormControlLabel
              className={styles.checkbox}
              control={<Checkbox />}
              label="Lactose"
            />
          </FormGroup>
        </div>
      </section>
    </main>
  );
}
