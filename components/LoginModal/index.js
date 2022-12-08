import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Modal,
} from "@mui/material";
import styles from "../../styles/Home.module.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { fetchLogin, userSelector } from "../ducks/user";
import { useDispatch, useSelector } from "react-redux";

const LoginModal = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  const [loginError, setLoginError] = useState(null);
  const [login, setLoginInput] = useState("");
  const [password, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { isLogged } = useSelector(userSelector);

  if (isLogged) {
    handleClose(false);
    return null;
  }

  const formHelperText = () => {
    return (
      <FormHelperText className={styles.formHelperText}>
        {loginError}
      </FormHelperText>
    );
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    display: "flex",
    flexWrap: "wrap",
  };

  return (
    <Modal
      open={open}
      onClose={() => handleClose(false)}
      className={styles.loginModal}
    >
      <Box sx={style}>
        <FormControl fullWidth variant="standard" error={loginError}>
          <InputLabel htmlFor="standard-adornment-login">Login</InputLabel>
          <Input
            id="login"
            label="Login"
            variant="standard"
            value={login}
            onChange={({ target }) => setLoginInput(target.value)}
          />
        </FormControl>

        <FormControl fullWidth variant="standard" error={loginError}>
          <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={({ target }) => setPasswordInput(target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Senha"
          />
          {loginError && formHelperText()}
        </FormControl>
        <Button
          className={styles.loginModalButton}
          variant="outlined"
          onClick={() => {
            dispatch(fetchLogin(login, password));
          }}
        >
          Entrar
        </Button>
      </Box>
    </Modal>
  );
};

export default LoginModal;
