import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Button/Card";
import ErrorModal from "../../UI/Button/ErrorModal";
import "./UserInfoInput.css";

const UserInfoInput = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState({});
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
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid age (> 0).",
      });
      setEnteredUserAge("");
      return;
    }

    props.onAddEnteredUser(enteredUserName, enteredUserAge);
    setEnteredUserAge("");
    setEnteredUserName("");
  };
  // Removing error modal
  const errorModalHandler = () => {
    setError({});
  };
  return (
    <section>
      {Object.keys(error).length > 0 && (
        <ErrorModal error={error} onErrorHandler={errorModalHandler} />
      )}
      <Card>
        <form className="form" onSubmit={addEnteredUserInfo}>
          <div className="form-control">
            <label htmlFor="userName">Username</label>
            <input
              id="username"
              type="text"
              onChange={addUserNameHandler}
              value={enteredUserName}
            ></input>
            <label htmlFor="user-age">Age (Years)</label>
            <input
              id="user-age"
              type="number"
              max="150"
              step="1"
              onChange={addUserAgeHandler}
              value={enteredUserAge}
            ></input>
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </section>
  );
};

export default UserInfoInput;
