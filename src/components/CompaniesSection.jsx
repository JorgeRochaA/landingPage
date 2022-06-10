import React from "react";
import "../styles/CompaniesSection/CompaniesSection.scss";

function CompaniesSection() {
  const companies = [
    "https://i.ibb.co/j62CQnG/google.png",
    "https://i.ibb.co/9Tt58NX/strape.png",
    "https://i.ibb.co/FKFhG6T/uber.png",
    "https://i.ibb.co/HXpDp8X/nike.png",
    "https://i.ibb.co/yY9S4LM/airbnb.png",
    "https://i.ibb.co/cybrF2j/mastercard.png",
  ];
  return (
    <div className="companies_container">
      <div>
        <div className="companies_data_container">
          <div className="companies_data_logo_container">
            <img src={require("../assets/logo.png")} alt="logo" />
            Logo
          </div>
          <div className="companies_data_title">
            “ Make more time for the work that matters most ”
          </div>
          <div className="companies_data_description">
            Best software platform for running an internet business.
          </div>
        </div>
        <div className="companies_image_container">
          <img src={require("../assets/character.png")} alt="character" />
        </div>
      </div>
      <div className="companies_trusted_container">
        {companies.map((company, index) => {
          return <img key={index} src={company} alt="company" />;
        })}
      </div>
    </div>
  );
}

export default CompaniesSection;
