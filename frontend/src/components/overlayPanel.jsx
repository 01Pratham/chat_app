import React from "react";

const OverlayPanel = (props) => {
  return (
    <div className={`overlay-panel overlay-${props.position}`}>
      <h3 className="card-head">{props.head}</h3>
      <p className="panel-msg">{props.text}</p>
      <button
        className="login-button ghost"
        id={props.button_id}
        onClick={() => {
          props.func(props.func_param);
        }}
      >
        {props.button}
      </button>
    </div>
  );
};

export default OverlayPanel;
