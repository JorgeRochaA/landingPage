import React from "react";
import {
  MainContainer,
  MainContainerData,
  MainContainerDataTitle,
  MainContainerDataInfo,
  MainContainerDataButtons,
  MainButtonGetStarted,
  MainButtonLearnMore,
  MainContainerImage,
  ImageContainer,
} from "../styles/MainSection";
function MainSection() {
  return (
    <MainContainer>
      <MainContainerData>
        <MainContainerDataTitle>
          Simply explained with illustrations
        </MainContainerDataTitle>
        <MainContainerDataInfo>
          There are a lot of different components that will help you create the
          perfect look for your project
        </MainContainerDataInfo>
        <MainContainerDataButtons>
          <MainButtonGetStarted>Get Started</MainButtonGetStarted>
          <MainButtonLearnMore>Learn More</MainButtonLearnMore>
        </MainContainerDataButtons>
      </MainContainerData>
      <MainContainerImage>
        <ImageContainer>
          <img src={require("../assets/rocket.png")} alt="rocket" />
        </ImageContainer>
      </MainContainerImage>
    </MainContainer>
  );
}

export default MainSection;
