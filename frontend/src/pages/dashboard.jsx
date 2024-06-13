import React, { useEffect, useState } from "react";
import CSSLoader from "../scripts/CSSLoader";
import ChatUsers from "../components/chat-users";
import ChatMsg from "../components/chat-msg";

import Users from "../data/users";
import Chats from "../data/chats";
import MsgBox from "../components/msg-box";
import getChatsById from "../scripts/getChatsById";

const Dashboard = () => {
  const [selectedUser, setSelectedUser] = useState({});
  const [displayChats, setDisplayChats] = useState([{}]);

  CSSLoader("assets/css/dashboard.css");
  return (
    <div className="container-fluid m-2 app">
      <div className="row app-one">
        <div className="col-sm-4 side">
          <div className="side-one">
            <div className="row heading">
              <div className="col-sm-3 col-xs-3 heading-avatar">
                <div className="heading-avatar-icon">
                  <img src="https://bootdey.com/img/Content/avatar/avatar1.png" />
                </div>
              </div>
              <div className="col-sm-1 col-xs-1  heading-dot  float-right">
                <i
                  className="fa fa-ellipsis-v fa-2x  float-right"
                  aria-hidden="true"
                />
              </div>
              <div className="col-sm-2 col-xs-2 heading-compose  float-right">
                <i
                  className="fa fa-comments fa-2x  float-right"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div className="row searchBox">
              <div className="col-sm-12 searchBox-inner">
                <div className="form-group has-feedback">
                  <input
                    id="searchText"
                    type="text"
                    className="form-control"
                    name="searchText"
                    placeholder="Search"
                  />
                  <span className="glyphicon glyphicon-search form-control-feedback" />
                </div>
              </div>
            </div>
            <div className="sideBar">
              {Users.map((user) => (
                <ChatUsers
                  key={user.id}
                  id={user.id}
                  name={user.name}
                  time={user.time}
                  img={user.avatar}
                  userFunc={setSelectedUser}
                  chatFunc={setDisplayChats}
                />
              ))}
            </div>
          </div>
          <div className="side-two">
            <div className="row newMessage-heading">
              <div className="row newMessage-main">
                <div className="col-sm-2 col-xs-2 newMessage-back">
                  <i className="fa fa-arrow-left" aria-hidden="true" />
                </div>
                <div className="col-sm-10 col-xs-10 newMessage-title">
                  New Chat
                </div>
              </div>
            </div>
            <div className="composeBox">
              <div className="col-sm-12 composeBox-inner">
                <div className="form-group has-feedback">
                  <input
                    id="composeText"
                    type="text"
                    className="form-control"
                    name="searchText"
                    placeholder="Search People"
                  />
                  <span className="glyphicon glyphicon-search form-control-feedback" />
                </div>
              </div>
            </div>
            <div className="compose-sideBar">
              {Users.map((user) => (
                <ChatUsers
                  key={user.id}
                  id={user.id}
                  name={user.name}
                  time={user.time}
                  img={user.avatar}
                  userFunc={setSelectedUser}
                  chatFunc={setDisplayChats}
                />
              ))}
            </div>
          </div>
        </div>
        <MsgBox {...selectedUser[0]} Chats={displayChats} />
      </div>
    </div>
  );
};

export default Dashboard;
