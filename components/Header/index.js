import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { Button, Icon, ListItemText, Menu, MenuItem } from "@mui/material";
import BlenderSharpIcon from "@mui/icons-material/BlenderSharp";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";
import { userSelector } from "../ducks/user";

const Header = ({ userLogin, setIsOpenLoginModal }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const { isLogged, userData } = useSelector(userSelector);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };

  const renderLogin = () => {
    if (isLogged) {
      return (
        <menu>
          <span>{`Olá,  ${userData.username}`}</span>

          <Button id="basic-button" onClick={handleClick}>
            <MenuIcon />
          </Button>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={handleClose}>
              <Link href="/user-preferences">
                <ListItemText>Minhas preferências</ListItemText>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="/orders">
                <ListItemText>Meus pedidos</ListItemText>
              </Link>
            </MenuItem>
          </Menu>
        </menu>
      );
    }
    return (
      <Button
        className={styles.loginButton}
        variant="contained"
        onClick={() => setIsOpenLoginModal(true)}
      >
        Login
      </Button>
    );
  };

  return (
    <header className={styles.header}>
      <Link href="/" as={`/`}>
        <Icon component={BlenderSharpIcon} fontSize="large" href="/" />
      </Link>

      <Link href="/" as={`/`}>
        <span className={styles.headerTitle}>CHEF BOX</span>
      </Link>

      {renderLogin()}
    </header>
  );
};

export default Header;
