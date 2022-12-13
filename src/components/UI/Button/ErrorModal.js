import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div className={classes["error-modal-container"]}>
      <div className={classes.backdrop} onClick={props.onErrorHandler}></div>
      <Card className={classes["error-modal"]}>
        <header>
          <h2>{props.error.title}</h2>
        </header>
        <p className={classes["error-modal__content"]}>{props.error.message}</p>
        <footer>
          <Button
            type="button"
            onClick={props.onErrorHandler}
            className="invalid-button"
          >
            Okay
          </Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
