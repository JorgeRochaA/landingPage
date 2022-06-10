import React, { Fragment } from "react";
import "../styles/OfferCard/OfferCard.scss";
function OfferCard({ title, descriptions, image, orientation }) {
  return (
    <Fragment>
      {title && descriptions && image && (
        <div
          className={orientation ? `offer_card ${orientation}` : "offer_card"}
        >
          <div className="offer_card_image_container">
            <img src={image.url} alt={image.name} />
          </div>
          <div className="offer_card_data_container">
            <div className="offer_card_data_title">{title}</div>
            <div className="offer_card_data_description">
              {descriptions.map((description, index) => {
                return (
                  <div className="offer_card_data_detail" key={index}>
                    <div className="check">
                      <img src={require("../assets/check.png")} alt="check" />
                    </div>
                    {description}
                  </div>
                );
              })}
            </div>
            <div className="offer_card_data_button">
              <div className="button"></div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default OfferCard;
