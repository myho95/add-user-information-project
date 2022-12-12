import React from "react";
import Button from "../../UI/Button/Button";
import "./InvalidInput.css";

const InvalidInput = (props) => {
  return (
    <div className="invalid-input">
      <h2>Invalid input</h2>
      <div className="invalid-input__content">
        <div className="invalid-input__content__text">
          {props.isValidInputText}
        </div>
        <Button
          type="button"
          onClick={props.onHideInvalidAlert}
          className="invalid-button"
          buttonText="Okay"
        />
      </div>
    </div>
  );
};

export default InvalidInput;
