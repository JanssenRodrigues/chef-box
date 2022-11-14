import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import {
  Button,
  Icon,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import BlenderSharpIcon from "@mui/icons-material/BlenderSharp";
import EditIcon from "@mui/icons-material/Edit";
import MenuIcon from "@mui/icons-material/Menu";

const Header = ({ isLogged, userLogin, setIsOpenLoginModal }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

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
          <span>{`Olá,  ${userLogin}`}</span>

          <Button id="basic-button" onClick={handleClick}>
            <MenuIcon />
          </Button>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem
              onClick={handleClose}
              component="a"
              href="/user-preferences"
            >
              <ListItemIcon>
                <EditIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Minhas preferências</ListItemText>
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
      <Link href="/">
        <Icon component={BlenderSharpIcon} fontSize="large" href="/" />
      </Link>

      <Link href="/">
        <span className={styles.headerTitle}>CHEF BOX</span>
      </Link>

      {renderLogin()}
    </header>
  );
};

export default Header;
