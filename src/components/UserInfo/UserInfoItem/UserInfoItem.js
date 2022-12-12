import React from "react";
import "./UserInfoItem.css";

const UserInfoItem = (props) => {
  return (
    <li
      className="user-item"
      key={props.userItem.id}
    >{`${props.userItem.name} (${props.userItem.age} years old)`}</li>
  );
};

export default UserInfoItem;
