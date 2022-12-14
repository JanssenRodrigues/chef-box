import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import styles from "../../styles/Home.module.css";
import {
  Alert,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Input,
  InputLabel,
  Link,
  Snackbar,
} from "@mui/material";
import { userSelector } from "../../components/ducks/user";
import { useDispatch, useSelector } from "react-redux";
import { action, createOrder } from "../../components/ducks/orders";
import { notificationSelector } from "../../components/ducks/notifications";

const Checkout = ({ setIsOpenLoginModal }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [address, setAddress] = useState("");
  const [fullName, setFullName] = useState("");
  const [cardholderName, setCardHolderName] = useState("");
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [creditCardValidity, setCreditCardValidity] = useState("");
  const [creditCardCVV, setCreditCardCVV] = useState("");
  const [creditCardCPF, setCreditCardCPF] = useState("");
  const [terms, setTerms] = useState(false);
  const [errors, setErrors] = useState({
    address: false,
    fullName: false,
    cardholderName: false,
    creditCardNumber: false,
    creditCardValidity: false,
    creditCardCVV: false,
    creditCardCPF: false,
    terms: null,
  });

  const { user, userData, isLogged } = useSelector(userSelector);
  const { snackbar, isOpenNotification } = useSelector(notificationSelector);

  const handleClose = () => {
    dispatch(action("SET_IS_OPEN_SNACKBAR", false));
    router.push("/");
  };

  useEffect(() => {
    if (user) {
      dispatch(fetchPreferences(userData.id));
    }
  }, []);

  useEffect(() => {
    if (!isLogged) {
      setIsOpenLoginModal(true);
    }
  }, [isLogged]);

  const validateAddress = () => {
    const hasError = address === "";
    setErrors({
      ...errors,
      address: hasError,
    });
  };

  const validateFullName = () => {
    const hasError = fullName === "";
    setErrors({
      ...errors,
      fullName: hasError,
    });
  };

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
      address,
      fullName,
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
      dispatch(
        createOrder(
          {
            address,
            fullName,
            cardholderName,
            creditCardNumber,
            creditCardValidity,
            creditCardCVV,
            creditCardCPF,
          },
          userData.id
        )
      );
    }
  };

  const formHelperText = () => {
    return (
      <FormHelperText className={styles.formHelperText}>
        Campo obrigat??rio
      </FormHelperText>
    );
  };

  return (
    <main className={styles.checkoutProductContainer}>
      <Snackbar
        open={isOpenNotification}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        autoHideDuration={5000}
      >
        <Alert
          onClose={handleClose}
          severity={snackbar.type}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
      <section className={styles.checkoutDescriptionSection}>
        <div className={styles.checkoutDescription}>
          <span>
            Voc?? est?? prestes a mergulhar no mais maravilhoso mundo da cozinha!
            Mas antes disso, ?? bom ficar sabendo o que voc?? ir?? receber. Na
            ChefBox apenas as receitas s??o surpresas, ent??o prepare-se, voc?? ir??
            receber:
          </span>
          <ul>
            <li className={styles.listItem}>Caixa decorada(temas mensais)</li>
            <li className={styles.listItem}>Guia de t??cnicas de praparo</li>
            <li className={styles.listItem}>
              Cartilhas com as receitas que voc?? ir?? preparar
            </li>
            <li className={styles.listItem}>
              Diversos ingredientes frescos, de qualidade e que render??o{" "}
              <strong>4 por????es</strong> para cada receita, servindo o total de
              <strong> 12 pessoas</strong>!
            </li>
          </ul>

          <span>
            Antes de confirmar a sua assinatura, confira as suas prefer??ncias,{" "}
            <Link href="/user-preferences" variant="body1">
              clicando aqui!
            </Link>
          </span>
        </div>
        <img
          className={styles.checkoutProductImage}
          src="/checkout_food_box.png"
          alt=""
        />
      </section>

      <section className={styles.checkoutPaymentSection}>
        <FormGroup className={styles.checkoutPaymentData}>
          <FormControl
            fullWidth
            variant="standard"
            error={errors.address}
            sx={{ mb: 2 }}
          >
            <InputLabel>
              Endere??o completo(incluindo Estado e Cidade)
            </InputLabel>
            <Input
              id="address"
              variant="standard"
              value={address}
              onChange={({ target }) => setAddress(target.value)}
              error={errors.address}
              onBlur={() => validateAddress()}
            />
            {errors.address && formHelperText()}
          </FormControl>

          <FormControl
            fullWidth
            variant="standard"
            error={errors.fullName}
            sx={{ mb: 2 }}
          >
            <InputLabel>Nome e Sobrenome</InputLabel>
            <Input
              id="full-name"
              variant="standard"
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
              error={errors.fullName}
              onBlur={() => validateFullName()}
            />
            {errors.fullName && formHelperText()}
          </FormControl>

          <FormControl
            fullWidth
            variant="standard"
            error={errors.cardholderName}
            sx={{ mb: 2 }}
          >
            <InputLabel>Nome do titular(impresso no cart??o)</InputLabel>
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
            <InputLabel>N??mero do Cart??o de cr??dito</InputLabel>
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
                Voc?? precisa ler e aceitar os termos de aceite antes de
                continuar
              </FormHelperText>
            )}
          </FormControl>
          <Button
            className={styles.checkoutPaymentButton}
            variant="contained"
            onClick={() => {
              validateForm();
            }}
            disabled={isOpenNotification}
          >
            Confirmar assinatura
          </Button>
        </FormGroup>

        <img
          className={styles.checkoutProductImage}
          src="/checkout_credit_card.png"
          alt=""
        />
      </section>
    </main>
  );
};

export default Checkout;
