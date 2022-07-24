import styled from "styled-components";

const media = {
  tablet: "@media screen and (min-width: 712px) and (max-width: 1299px)",
  desktop: "@media screen and (min-width: 1300px)",
  large_desktop: "@media screen and (min-width: 1700px)",
};

export const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 44px;
  ${media.desktop} {
    height: 600px;
    flex-direction: row;
  }
`;

export const MainContainerData = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${media.desktop} {
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 106px;
  }
  ${media.large_desktop} {
    margin-left: 175px;
    justify-content: center;
  }
`;

export const ImageContainer = styled.div`
  width: 502px;
  img {
    width: 90%;
  }
`;

export const MainContainerImage = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  ${ImageContainer} {
    width: 90%;
    img {
      width: 90%;
    }
  }
  ${media.tablet} {
    width: 50%;
  }
  ${media.desktop} {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-top: 53px;
    ${ImageContainer} {
      width: 502px;
      img {
        width: 90%;
      }
    }
  }
`;

export const MainContainerDataTitle = styled.div`
  width: 90%;
  font-weight: 700;
  font-size: 50px;
  line-height: 87px;
  letter-spacing: -4.5px;
  text-align: center;
  ${media.tablet} {
    width: 642px;
    font-size: 72px;
  }
  ${media.desktop} {
    font-size: 72px;
    text-align: left;
    margin-left: 120px;
  }
`;

export const MainContainerDataInfo = styled.div`
  width: 90%;
  font-weight: 400;
  font-size: 21px;
  line-height: 30px;
  letter-spacing: -0.8px;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 22px;
  text-align: center;
  ${media.tablet} {
    width: 642px;
  }
  ${media.desktop} {
    margin-left: 120px;
    width: 448px;
    text-align: left;
  }
`;

export const MainContainerDataButtons = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  color: white;
  margin: 44px 0;
  div {
    display: grid;
    place-items: center;
  }
  ${media.desktop} {
    justify-content: flex-start;
    font-weight: 500;
    div:first-child {
      margin-left: 120px;
    }
  }
`;

export const MainButtonGetStarted = styled.div`
  height: 49px;
  gap: 10px;
  width: 121px;
  background: #5f62e2;
  border-radius: 10px;
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const MainButtonLearnMore = styled.div`
  width: 119px;
  height: 49px;
  background: rgba(95, 98, 226, 0.15);
  border-radius: 10px;
  color: #5f62e2;
  margin-left: 11px;
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
