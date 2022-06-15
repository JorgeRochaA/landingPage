import React from "react";
import "../styles/CompaniesSection/CompaniesSection.scss";

function CompaniesSection() {
  const companies = [
    "https://i.ibb.co/2dP1WZ3/google.png",
    "https://i.ibb.co/F6zHH9R/stripe.png",
    "https://i.ibb.co/dpVP8zQ/microsoft.png",
    "https://i.ibb.co/khCZgFS/pfizer.png",
    "https://i.ibb.co/hRzNJx8/airbnb.png",
    "https://i.ibb.co/M7bRLTM/emirates.png",
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
