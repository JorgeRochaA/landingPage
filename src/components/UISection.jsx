import React from "react";
import OfferCard from "../components/OfferCard";
import "../styles/UISection/UISection.scss";
import offerCardsData from "../components/offerCardData.json";
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
      {offerCardsData.map((offerCard, index) => {
        return (
          <OfferCard
            key={index}
            title={offerCard.title}
            descriptions={offerCard.descriptions}
            image={offerCard.image}
            orientation={offerCard.orientation}
          />
        );
      })}
    </div>
  );
}

export default UISection;
