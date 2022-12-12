import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import "./UserInfoInput.css";

const UserInfoInput = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const addUserNameHandler = (evt) => {
    setEnteredUserName((prevName) => evt.target.value);
  };
  const addUserAgeHandler = (evt) => {
    setEnteredUserAge((prevAge) => evt.target.value);
  };
  const addEnteredUserInfo = (evt) => {
    evt.preventDefault();
    // When name or age value is empty
    if (enteredUserName.trim().length === 0 || !enteredUserAge) {
      props.onInvalidInput(
        "Please enter a valid name and age (non-empty values)"
      );
      return;
    }
    if (Number(enteredUserAge) < 0) {
      props.onInvalidInput("Please enter a valid age (>0).");
      setEnteredUserAge("");
      return;
    }

    props.onAddEnteredUser({
      name: enteredUserName,
      age: enteredUserAge,
      id: Math.random().toString(),
    });
    setEnteredUserAge("");
    setEnteredUserName("");
  };
  console.log(enteredUserAge);
  return (
    <form className="form" onSubmit={addEnteredUserInfo}>
      <div className="form-control">
        <label>Username</label>
        <input
          type="text"
          onChange={addUserNameHandler}
          value={enteredUserName}
        ></input>
        <label>Age (Years)</label>
        <input
          type="number"
          max="150"
          step="1"
          onChange={addUserAgeHandler}
          value={enteredUserAge}
        ></input>
      </div>
      <Button type="submit" buttonText="Add User" />
    </form>
  );
};

export default UserInfoInput;
