import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default ErrorModal;
