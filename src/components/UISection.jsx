import React from "react";
import "../styles/UISection/UISection.scss";
function UISection() {
  return (
    <div className="ui_section_container">
      <div className="ui_section_title">Use illustrations in UI design</div>
      <div className="ui_section_image_container">
        <img
          className="background"
          src={require("../assets/UIDesign.png")}
          alt="UIDesign"
        />
        <div className="play_button">
          <img src={require("../assets/playIcon.png")} alt="play icon" />
        </div>
      </div>
    </div>
  );
}

export default UISection;
