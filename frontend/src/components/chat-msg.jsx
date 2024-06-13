import React from "react";

const ChatMsg = (props) => {
  return (
    <div className="row message-body">
      <div className={`col-sm-12 message-main-${props.userType}`}>
        <div className={props.userType}>
          <div className="message-text">{props.msg}</div>
          <span className="message-time float-right">{props.time}</span>
        </div>
      </div>
    </div>
  );
};

export default ChatMsg;
