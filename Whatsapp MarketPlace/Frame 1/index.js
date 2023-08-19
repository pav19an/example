*index.jsx*

import React from "react";
import "./style.css";

export const IphonePro = () => {
  return (
    <div className="iphone-pro">
      <div className="div">
        <img className="vector" alt="Vector" src="image.svg" />
        <img className="img" alt="Vector" src="vector.svg" />
        <img className="vector-2" alt="Vector" src="vector-2.svg" />
        <div className="overlap-group">
          <div className="text-wrapper">9:40</div>
          <div className="ellipse" />
          <div className="ellipse-2" />
        </div>
        <img className="whatapp-icon" alt="Whatapp icon" src="whatapp-icon-1.png" />
        <div className="text-wrapper-2">Whatsapp marketplace</div>
        <div className="overlap">
          <img className="rectangle" alt="Rectangle" src="rectangle-1.svg" />
          <div className="GET-STARTED">&nbsp;&nbsp; GET STARTED</div>
        </div>
      </div>
    </div>
  );
};
