import React from "react";
import getUserById from "../scripts/getUserById";
import Chats from "../data/chats";
import getChatsById from "../scripts/getChatsById";

const ChatUsers = (props) => {
  return (
    <div
      className="row sideBar-body"
      onClick={() => {
        props.userFunc(getUserById(props.id));
        props.chatFunc(getChatsById(Chats, props.id));
      }}
    >
      <div className="col-sm-3 col-xs-3 sideBar-avatar">
        <div className="avatar-icon">
          <img src={props.img} alt={props.name} />
        </div>
      </div>
      <div className="col-sm-9 col-xs-9 sideBar-main">
        <div className="row">
          <div className="col-sm-8 col-xs-8 sideBar-name">
            <span className="name-meta">{props.name}</span>
          </div>
          <div className="col-sm-4 col-xs-4 float-right sideBar-time">
            <span className="time-meta float-right">{props.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatUsers;
