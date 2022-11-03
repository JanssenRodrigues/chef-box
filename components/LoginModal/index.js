import React, { useState } from "react";
import { Box, Button, Modal, TextField } from "@mui/material";
import styles from "../../styles/Home.module.css";
import { setLocalStorageData } from "../../utils";

const LoginModal = ({ open, handleClose }) => {
  const [login, setLoginInput] = useState("");
  const [password, setPasswordInput] = useState("");
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
    flexDirection: "column",
  };
  console.log(login);
  return (
    <Modal
      open={open}
      onClose={() => handleClose(false)}
      className={styles.loginModal}
    >
      <Box sx={style}>
        <TextField
          id="login"
          label="Login"
          variant="standard"
          value={login}
          onChange={({ target }) => setLoginInput(target.value)}
        />
        <TextField
          id="password"
          label="Password"
          variant="standard"
          value={password}
          onChange={({ target }) => setPasswordInput(target.value)}
        />
        <Button
          onClick={() => {
            setLocalStorageData("login", login);
            setLocalStorageData("password", password);
            setLocalStorageData("isLogged", true);
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
