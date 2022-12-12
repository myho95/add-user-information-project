import React from "react";
import UserInfoItem from "../UserInfoItem/UserInfoItem";
import "./UserInfoList.css";
const UserInfoList = (props) => {
  return (
    <ul className="user-list">
      {props.usersList.map((user) => (
        <UserInfoItem key={user.id} userItem={user} />
      ))}
    </ul>
  );
};

export default UserInfoList;
