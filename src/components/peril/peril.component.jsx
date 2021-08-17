import React from "react";

import "./peril.styles.css";

export const Peril = ({peril, onClick}) => {
  return (
    <div className="peril">
      <button onClick={onClick} className="btn-peril">
      {/* <button className="css-m4oz1q"> */}
        <img
          src={peril.icon.variants.light.svgUrl}
          alt=""
          width="24"
          height="24"
          className="icon"
        />
        <h4>{peril.title}</h4>
      </button>
    </div>
  );
}
