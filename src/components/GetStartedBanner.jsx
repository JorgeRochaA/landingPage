import React from "react";
import "../styles/GetStartedBanner/GetStartedBanner.scss";
function GetStartedBanner() {
  return (
    <div className="banner_container">
      <div className="banner_data_container">
        <div className="banner_data_title">
          The quickest way to create awesome presentation
        </div>
        <div className="banner_data_buttons">
          <div className="button">Get Started</div>
          <div className="button">Learn More</div>
        </div>
      </div>
      <div className="banner_image_container">
        <img src={require("../assets/bomb.png")} alt="bomb" />
      </div>
    </div>
  );
}

export default GetStartedBanner;
