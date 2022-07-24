import styled from "styled-components";
import initial from "../assets/LearnMore.png";
import hover from "../assets/learnMoreHover.png";

const media = {
  desktop: "@media screen and (min-width: 1100px)",
};

export const OfferCardImageContainer = styled.div`
  height: 285px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 70%;
  }
  ${media.desktop} {
    width: 346px;
    img {
      height: 90%;
      margin-right: 230px;
    }
  }
`;

export const OfferCardStyled = styled.div`
  max-width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  margin-bottom: 55px;
  ${media.desktop} {
    flex-direction: row;
    &.reverse {
      flex-direction: row-reverse;
      ${OfferCardImageContainer} {
        img {
          height: 90%;
          margin-left: 450px;
        }
      }
    }
  }
`;

export const OfferCardDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OfferCardDataTitle = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 55px;
  line-height: 60px;
  letter-spacing: -2.5px;
  ${media.desktop} {
    width: 400px;
    text-align: left;
  }
`;

export const OfferCardDataDetail = styled.div`
  margin: 5px;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: -0.8px;
  &:first-child {
    margin-top: 30px;
  }
  ${media.desktop} {
    width: 405px;
    height: 40px;
    font-size: 21px;
  }
`;

export const Check = styled.div`
  height: 19px;
  width: 19px;
  display: grid;
  place-items: center;
  border: 1.5px solid #2ab691;
  border-radius: 50%;
  margin-right: 13px;
`;

export const OfferCardDataButton = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  ${media.desktop} {
    display: flex;
  }
`;

export const OfferCardButton = styled.div`
  height: 100%;
  margin-top: 28px;
  display: grid;
  align-items: center;
  width: 147px;
  height: 54px;
  background: rgba(95, 98, 226, 0.15);
  border-radius: 10px;
  align-self: flex-start;
  margin-top: 29px;
  background-image: url(${initial});
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    background-image: url(${hover});
  }
`;
