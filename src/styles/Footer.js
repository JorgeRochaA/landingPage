import styled from "styled-components";

const media = {
  tablet: "@media screen and (min-width: 670px) and (max-width: 869px)",
  desktop: "@media screen and (min-width: 870px)",
};

export const FooterStyled = styled.div`
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-top: 30px;
`;

export const FooterLinksContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, auto);
  max-width: 90%;
  gap: 15px;
  margin-left: 15px;
  ${media.tablet} {
    gap: 50px 100px;
  }
  ${media.desktop} {
    grid-template-columns: repeat(4, auto);
    width: 85%;
    gap: 0;
    justify-content: space-evenly;
    .footer_links_1 {
      width: 137px;
    }
    .footer_links_2 {
      width: 175px;
    }
    .footer_links_3 {
      width: 115px;
    }
    .footer_links_4 {
      width: 139px;
    }
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Link = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: -0.3px;
  color: rgba(255, 255, 255, 0.5);
  opacity: 0.9;
  i {
    margin-right: 7px;
  }
  &:not(:first-child) {
    margin-bottom: 15px;
  }
  &:hover {
    cursor: pointer;
  }
  &:first-child {
    width: 57px;
    height: 24px;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: white;
    margin-bottom: 15px;
  }
`;

export const CopyrightContainer = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px #c4c4c434 solid;
  margin-top: 15px;
  width: 85%;
`;

export const Copyright = styled.div`
  height: 60px;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: -0.3px;
  color: rgba(255, 255, 255, 0.5);
  opacity: 0.9;
  width: 100%;
  text-align: center;
  display: grid;
  place-items: center;
`;
