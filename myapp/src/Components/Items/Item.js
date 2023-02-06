import React from "react";
import "./Item.css";

const Item = (props) => {
  return (
    <div className="item_container">
      <div className="item_left">
        <div />
        <h3>{props.title}</h3>
      </div>
      <div className="item_right">
        <p>
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default Item;
