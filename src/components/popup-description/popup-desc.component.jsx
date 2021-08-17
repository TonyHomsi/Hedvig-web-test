import React from "react";
import "./popup-desc.styles.css";


const PopupDesc = ({ onClose, children }) => (
  <div className="popup">
    <div className="popup-inner">
      <button className="close-btn" onClick={onClose}>
        close
      </button>
      {children}
    </div>
  </div>
);

export default PopupDesc;
