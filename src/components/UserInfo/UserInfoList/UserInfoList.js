import React from "react";
import Card from "../../UI/Button/Card";
import UserInfoItem from "../UserInfoItem/UserInfoItem";
import "./UserInfoList.css";
const UserInfoList = (props) => {
  return (
    <Card>
      <ul className="user-list">
        {props.usersList.map((user) => (
          <UserInfoItem key={user.id} userItem={user} />
        ))}
      </ul>
    </Card>
  );
};

export default UserInfoList;
