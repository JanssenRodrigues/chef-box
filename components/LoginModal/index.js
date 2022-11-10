import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Modal,
} from "@mui/material";
import styles from "../../styles/Home.module.css";
import { setLocalStorageData } from "../../utils";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginModal = ({ open, handleClose, setIsLogged, setUserLogin }) => {
  const [login, setLoginInput] = useState("");
  const [password, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
        <FormControl fullWidth variant="standard">
          <InputLabel htmlFor="standard-adornment-login">Login</InputLabel>
          <Input
            id="login"
            label="Login"
            variant="standard"
            value={login}
            onChange={({ target }) => setLoginInput(target.value)}
          />
        </FormControl>

        <FormControl fullWidth variant="standard">
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
        </FormControl>
        <Button
          className={styles.loginModalButton}
          variant="outlined"
          onClick={() => {
            setLocalStorageData("isLogged", true);
            setLocalStorageData("userLogin", login);
            setIsLogged(true);
            setUserLogin(login);
            handleClose(false);
          }}
        >
          Entrar
        </Button>
      </Box>
    </Modal>
  );
};

export default LoginModal;
