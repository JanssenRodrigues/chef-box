import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getLocalStorageData } from "../../utils";

import styles from "../../styles/Home.module.css";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Input,
  InputLabel,
  Link,
} from "@mui/material";

const Checkout = ({ setIsOpenLoginModal }) => {
  const router = useRouter();
  const [cardholderName, setCardHolderName] = useState("");
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [creditCardValidity, setCreditCardValidity] = useState("");
  const [creditCardCVV, setCreditCardCVV] = useState("");
  const [creditCardCPF, setCreditCardCPF] = useState("");
  const [terms, setTerms] = useState(false);
  const [errors, setErrors] = useState({
    cardholderName: false,
    creditCardNumber: false,
    creditCardValidity: false,
    creditCardCVV: false,
    creditCardCPF: false,
    terms: null,
  });

  useEffect(() => {
    if (!getLocalStorageData("userPreferences")) {
      router.push("/user-preferences");
      return;
    }
    if (!getLocalStorageData("isLogged")) {
      setIsOpenLoginModal(true);
    }
  }, []);

  const validateCardHoldName = () => {
    const hasError = cardholderName === "";
    setErrors({
      ...errors,
      cardholderName: hasError,
    });
  };

  const validateCreditCardNumber = () => {
    const hasError = creditCardNumber === "" || creditCardNumber.length < 16;
    setErrors({
      ...errors,
      creditCardNumber: hasError,
    });
  };

  const validateCreditCardValidity = () => {
    const hasError = creditCardValidity === "" || creditCardValidity.length < 5;
    setErrors({
      ...errors,
      creditCardValidity: hasError,
    });
  };

  const validateCreditCardCVV = () => {
    const hasError = creditCardCVV === "" || creditCardCVV.length < 3;
    setErrors({
      ...errors,
      creditCardCVV: hasError,
    });
  };

  const validateCreditCardCPF = () => {
    const hasError = creditCardCPF === "" || creditCardCPF.length < 11;
    setErrors({
      ...errors,
      creditCardCPF: hasError,
    });
  };

  const validateForm = () => {
    const formValuesObj = {
      cardholderName,
      creditCardNumber,
      creditCardValidity,
      creditCardCPF,
      creditCardCVV,
      terms,
    };

    const hasFormError = Object.keys(errors).filter((key) => {
      return (
        errors[key] === true ||
        errors[key] === null ||
        formValuesObj[key] === "" ||
        formValuesObj[key] === false
      );
    });

    const updatedErrors = hasFormError.reduce((acc, currentValue) => {
      const returns = { ...acc, [currentValue]: true };
      return returns;
    }, {});

    setErrors({
      ...updatedErrors,
    });

    if (hasFormError.length === 0) {
      router.push("/subscription-confirmation");
    }
  };

  const formHelperText = () => {
    return (
      <FormHelperText className={styles.formHelperText}>
        Campo obrigatório
      </FormHelperText>
    );
  };

  return (
    <div className={styles.checkoutProductContainer}>
      <section className={styles.checkoutDescriptionSection}>
        <div className={styles.checkoutDescription}>
          <span>
            Você está prestes a mergulhar no mais maravilhoso mundo da cozinha!
            Mas antes disso, é bom ficar sabendo o que você irá receber. Na
            ChefBox apenas as receitas são surpresas, então prepare-se, você irá
            receber:
          </span>
          <ul>
            <li className={styles.listItem}>Caixa decorada(temas mensais)</li>
            <li className={styles.listItem}>Guia de técnicas de praparo</li>
            <li className={styles.listItem}>
              Cartilhas com as receitas que você irá preparar
            </li>
            <li className={styles.listItem}>
              Diversos ingredientes frescos, de qualidade e que renderão{" "}
              <strong>4 porções</strong> para cada receita, servindo o total de
              <strong> 12 pessoas</strong>!
            </li>
          </ul>

          <span>
            Antes de confirmar a sua assinatura, confira as suas preferências,{" "}
            <Link href="/user-preferences" variant="body1">
              clicando aqui!
            </Link>
          </span>
        </div>
        <div className={styles.checkoutProductImage}>
          <img src="/checkout_food_box.png" alt="" />
        </div>
      </section>

      <section className={styles.checkoutPaymentSection}>
        <FormGroup className={styles.checkoutPaymentData}>
          <FormControl
            fullWidth
            variant="standard"
            error={errors.cardholderName}
            sx={{ mb: 2 }}
          >
            <InputLabel>Nome do titular</InputLabel>
            <Input
              id="cardholder-name"
              variant="standard"
              value={cardholderName}
              onChange={({ target }) => setCardHolderName(target.value)}
              error={errors.cardholderName}
              onBlur={() => validateCardHoldName()}
            />
            {errors.cardholderName && formHelperText()}
          </FormControl>

          <FormControl
            fullWidth
            variant="standard"
            error={errors.creditCardNumber}
            sx={{ mb: 2 }}
          >
            <InputLabel>Número do Cartão de crédito</InputLabel>
            <Input
              id="credit-card"
              variant="standard"
              value={creditCardNumber}
              onChange={({ target }) => setCreditCardNumber(target.value)}
              error={errors.creditCardNumber}
              onBlur={() => validateCreditCardNumber()}
              inputProps={{
                maxLength: 16,
              }}
            />
            {errors.creditCardNumber && formHelperText()}
          </FormControl>

          <FormControl
            className={styles.checkoutPaymentCPF}
            error={errors.creditCardCPF}
            variant="standard"
            sx={{ mb: 2 }}
          >
            <InputLabel>CPF</InputLabel>
            <Input
              id="CPF"
              variant="standard"
              value={creditCardCPF}
              onChange={({ target }) => setCreditCardCPF(target.value)}
              error={errors.creditCardCPF}
              onBlur={() => validateCreditCardCPF()}
              inputProps={{
                maxLength: 11,
              }}
            />
            {errors.creditCardCPF && formHelperText()}
          </FormControl>

          <FormControl
            className={styles.checkoutPaymentValidity}
            error={errors.creditCardValidity}
            variant="standard"
            sx={{ mb: 2 }}
          >
            <InputLabel>Validade</InputLabel>
            <Input
              id="validity"
              variant="standard"
              value={creditCardValidity}
              onChange={({ target }) => setCreditCardValidity(target.value)}
              error={errors.creditCardValidity}
              onBlur={() => validateCreditCardValidity()}
              inputProps={{
                maxLength: 5,
              }}
            />
            {errors.creditCardValidity && formHelperText()}
          </FormControl>

          <FormControl
            className={styles.checkoutPaymentCVV}
            error={errors.creditCardCVV}
            variant="standard"
            sx={{ mb: 2 }}
          >
            <InputLabel>CVV</InputLabel>
            <Input
              id="CVV"
              variant="standard"
              value={creditCardCVV}
              onChange={({ target }) => setCreditCardCVV(target.value)}
              error={errors.creditCardCVV}
              onBlur={() => validateCreditCardCVV()}
              inputProps={{
                maxLength: 3,
              }}
            />
            {errors.creditCardCVV && formHelperText()}
          </FormControl>

          <FormControl
            className={styles.checkoutPaymentTerms}
            variant="standard"
            error={errors.terms}
          >
            <FormGroup>
              <FormControlLabel
                className={styles.checkbox}
                label="Aceito os termos de contrato"
                control={
                  <Checkbox
                    id="terms"
                    variant="standard"
                    checked={terms}
                    name="terms"
                    onChange={({ target }) => {
                      setTerms(target.checked);
                      setErrors({
                        ...errors,
                        terms: !target.checked,
                      });
                    }}
                  />
                }
              />
            </FormGroup>
            {errors.terms && (
              <FormHelperText className={styles.formHelperText}>
                Você precisa ler e aceitar os termos de aceite antes de
                continuar
              </FormHelperText>
            )}
          </FormControl>
          <Button
            className={styles.confirmSubscription}
            variant="contained"
            onClick={() => {
              validateForm();
            }}
          >
            Confirmar assinatura
          </Button>
        </FormGroup>

        <div className={styles.checkoutProductImage}>
          <img src="/checkout_credit_card.png" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Checkout;
