import React from "react";
import styles from "./Button.module.css";
const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`${styles.button} ${styles[props.className]}`}
      onClick={props.onClick}
    >
      {props.buttonText}
    </button>
  );
};

export default Button;
