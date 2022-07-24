import React, { Fragment } from "react";
import {
  OfferCardStyled,
  OfferCardImageContainer,
  OfferCardDataContainer,
  OfferCardDataTitle,
  OfferCardDataDetail,
  Check,
  OfferCardDataButton,
  OfferCardButton,
} from "../styles/OfferCard";
function OfferCard({ title, descriptions, image, orientation }) {
  return (
    <Fragment>
      {title && descriptions && image && (
        <OfferCardStyled className={orientation ? ` ${orientation}` : ""}>
          <OfferCardImageContainer>
            <img src={image.url} alt={image.name} />
          </OfferCardImageContainer>
          <OfferCardDataContainer>
            <OfferCardDataTitle>{title}</OfferCardDataTitle>
            <div>
              {descriptions.map((description, index) => {
                return (
                  <OfferCardDataDetail key={index}>
                    <Check>
                      <img src={require("../assets/check.png")} alt="check" />
                    </Check>
                    {description}
                  </OfferCardDataDetail>
                );
              })}
            </div>
            <OfferCardDataButton>
              <OfferCardButton></OfferCardButton>
            </OfferCardDataButton>
          </OfferCardDataContainer>
        </OfferCardStyled>
      )}
    </Fragment>
  );
}

export default OfferCard;
