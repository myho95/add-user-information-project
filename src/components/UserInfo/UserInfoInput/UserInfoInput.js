import React, { Fragment, useRef, useState } from "react";
import ReactDOM from "react-dom";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Button/Card";
import ErrorModal from "../../UI/Button/ErrorModal";
import "./UserInfoInput.css";

const UserInfoInput = (props) => {
  // const [enteredUserName, setEnteredUserName] = useState("");
  // const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState({});

  const enteredName = useRef();
  const enteredAge = useRef();

  // const addUserNameHandler = (evt) => {
  //   setEnteredUserName((prevName) => evt.target.value);
  // };
  // const addUserAgeHandler = (evt) => {
  //   setEnteredUserAge((prevAge) => evt.target.value);
  // };
  const addEnteredUserInfo = (evt) => {
    const enteredUserName = enteredName.current.value;
    const enteredUserAge = enteredAge.current.value;
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
      return;
    }

    props.onAddEnteredUser(enteredUserName, enteredUserAge);
    enteredName.current.value = "";
    enteredAge.current.value = "";
    // setEnteredUserAge("");
    // setEnteredUserName("");
  };
  console.log(enteredName.current);
  // Removing error modal
  const errorModalHandler = () => {
    setError({});
  };
  return (
    <Fragment>
      {Object.keys(error).length > 0 &&
        ReactDOM.createPortal(
          <ErrorModal error={error} onErrorHandler={errorModalHandler} />,
          document.getElementById("overlay-root")
        )}
      <Card>
        <form className="form" onSubmit={addEnteredUserInfo}>
          <div className="form-control">
            <label htmlFor="userName">Username</label>
            <input
              id="username"
              type="text"
              // onChange={addUserNameHandler}
              ref={enteredName}
              // value={enteredUserName}
            ></input>
            <label htmlFor="user-age">Age (Years)</label>
            <input
              id="user-age"
              type="number"
              max="150"
              step="1"
              // onChange={addUserAgeHandler}
              ref={enteredAge}
              // value={enteredUserAge}
            ></input>
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default UserInfoInput;
