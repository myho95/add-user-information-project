import React, { useState } from "react";
import "./App.css";
import InvalidInput from "./components/UserInfo/UserInfoInput/InvalidInput";
import UserInfoInput from "./components/UserInfo/UserInfoInput/UserInfoInput";
import UserInfoList from "./components/UserInfo/UserInfoList/UserInfoList";

function App() {
  const [userInfoList, setUserInfoList] = useState([]);
  const [isValidInput, setIsValidInput] = useState({
    isValid: true,
    invalidText: "",
  });
  const addEnteredUser = (enteredUser) => {
    setUserInfoList((prev) => {
      let updatedUser = [...prev];
      updatedUser.unshift(enteredUser);
      return updatedUser;
    });
  };
  const invalidInputHandler = (text) => {
    setIsValidInput({ isValid: false, invalidText: text });
    console.log(text);
  };
  const hideInvalidAlertHandler = () => {
    setIsValidInput({
      isValid: true,
      invalidText: "",
    });
  };
  return (
    <div className="user-info-app">
      <section id="user-info-input">
        <UserInfoInput
          onAddEnteredUser={addEnteredUser}
          onInvalidInput={invalidInputHandler}
        />
      </section>
      <section id="user-info-list">
        <UserInfoList usersList={userInfoList} />
      </section>
      {!isValidInput.isValid && (
        <section id="overlay">
          <span
            className="overlay-background"
            onClick={hideInvalidAlertHandler}
          />
          <InvalidInput
            isValidInputText={isValidInput.invalidText}
            onHideInvalidAlert={hideInvalidAlertHandler}
          />
        </section>
      )}
    </div>
  );
}

export default App;
