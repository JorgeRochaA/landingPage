import React from "react";
import Card from "../components/Card";
import CardsInfo from "../data/cardInfo.json";
import "../styles/ServicesSection/ServicesSection.scss";
function ServicesSection() {
  return (
    <div className="services_container">
      <div className="cards_container">
        {CardsInfo &&
          CardsInfo.map((card, index) => {
            return (
              card && (
                <Card
                  key={index}
                  url={card.url}
                  title={card.title}
                  description={card.description}
                />
              )
            );
          })}
      </div>
      <div className="services_data">
        <div className="services_data_info">
          <div className="services_data_info_title">
            The quickest way to create modern presentation
          </div>
          <div className="services_data_info_description">
            Best software platform for running an internet business. We build
            the most powerful and flexible tools for internet commerce.
          </div>
          <div className="services_data_info_button"></div>
          <div className="services_data_social_medias">
            <div className="social_medias_title">Follow us</div>
            <div>
              <div className="social_medias">
                <img
                  src="https://i.ibb.co/wpgw36D/facebook.png"
                  alt="Facebook"
                />
              </div>
              <div className="social_medias">
                <img
                  src="https://i.ibb.co/mFXm3hW/instagram.png"
                  alt="Instagram"
                />
              </div>
              <div className="social_medias">
                <img src="https://i.ibb.co/X376X56/twitter.png" alt="Twitter" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
