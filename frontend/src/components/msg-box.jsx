import React from "react";
import ChatMsg from "./chat-msg";

const MsgBox = (props) => {
  return (
    <>
      <div className="col-sm-8 conversation">
        <div className="row heading">
          <div className="col-sm-2 col-md-1 col-xs-3 heading-avatar">
            <div className="heading-avatar-icon">
              <img src={props.avatar} alt={props.name} />
            </div>
          </div>
          <div className="col-sm-8 col-xs-7 heading-name">
            <a className="heading-name-meta">{props.name}</a>
            <span className="heading-online">{props.status}</span>
          </div>
          <div className="col-sm-1 col-xs-1  heading-dot float-right">
            <i
              className="fa fa-ellipsis-v fa-2x  float-right"
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="message" id="conversation">
          {props.Chats.map((chat) => (
            <ChatMsg
              key={chat.id}
              msg={chat.msg}
              userType={chat.userType}
              time={chat.time}
            />
          ))}
        </div>
        <div className="row reply">
          <div className="col-sm-1  reply-btn">
            <i className="fa fa-smile " />
          </div>
          <div className="col-sm-10 col-xs-9 reply-main">
            <textarea
              className="form-control"
              rows={1}
              id="comment"
              defaultValue={""}
            />
          </div>
          <div className="col-sm-1 reply-btn">
            <i className="fa fa-microphone" aria-hidden="true" />
          </div>
         
        </div>
      </div>
    </>
  );
};

export default MsgBox;
