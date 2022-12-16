import React, { Fragment, useState } from "react";
import "./App.css";
import UserInfoInput from "./components/UserInfo/UserInfoInput/UserInfoInput";
import UserInfoList from "./components/UserInfo/UserInfoList/UserInfoList";

function App() {
  const [userInfoList, setUserInfoList] = useState([]);
  const addEnteredUser = (uName, uAge) => {
    setUserInfoList((prevUserList) => {
      return [
        { name: uName, age: uAge, id: Math.random().toString() },
        ...prevUserList,
      ];
    });
  };
  return (
    <Fragment>
      <UserInfoInput onAddEnteredUser={addEnteredUser} />
      <UserInfoList usersList={userInfoList} />
    </Fragment>
  );
}

export default App;
