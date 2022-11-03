import React from "react";
import { Icon } from "@mui/material";
import styles from "../../styles/Home.module.css";

const Reason = ({ icon, text }) => {
  return (
    <div className={styles.reason}>
      <Icon component={icon} fontSize="large" />
      <p>{text}</p>
    </div>
  );
};

export default Reason;
