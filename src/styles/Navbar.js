import styled from "styled-components";

const media = {
  desktop: "@media screen and (min-width: 1000px)",
};

export const NavbarContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
  height: 78px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-family: "Inter";
  font-style: normal;
  color: #000000;
`;

export const Logo = styled.h2`
  height: 78px;
  width: 15%;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  margin-left: 48px;
`;

export const OptionsContainer = styled.div`
  height: 78px;
  width: 100%;
  position: absolute;
  bottom: -365px;
  height: 350px;
  left: -100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  transition: 0.5s;
  padding: 0;
  background-color: #ffffff;
  &.open {
    bottom: -365px;
    left: 0;
  }
  ${media.desktop} {
    height: 78px;
    flex-direction: row;
    justify-content: flex-end;
    width: 85%;
    background-color: #ffffff;
    position: initial;
  }
`;

export const Option = styled.h3`
  margin: 0;
  height: 19px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  ${media.desktop} {
    margin-left: 29px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const SignUpContainer = styled.h3`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  background: rgba(42, 182, 145, 0.1);
  border-radius: 10px;
  padding: 0 12px;
  ${media.desktop} {
    margin-right: 48px;
    margin-left: 34px;
    &:hover {
      background: rgba(42, 182, 145, 0.2);
      cursor: pointer;
    }
  }
`;

export const SignUp = styled.h3`
  width: 60px;
  height: 19px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #2ab691;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const Bar = styled.div`
  height: 5px;
  background-color: #000000;
  border-radius: 5px;
  transition: 0.5s;

  :nth-child(1) {
    width: 25%;
  }
  :nth-child(2) {
    width: 50%;
  }
  :nth-child(3) {
    width: 75%;
  }
`;
export const Burger = styled.div`
  display: flex;
  height: 50px;
  width: 75px;
  flex-direction: column;
  justify-content: space-evenly;
  overflow: hidden;
  cursor: pointer;
  margin-right: 29px;
  &.open {
    ${Bar}:nth-child(1) {
      width: 50%;
      transform: translate(18px, 15px) rotate(40deg);
    }
    ${Bar}:nth-child(2) {
      transform: translateX(-80px);
    }
    ${Bar}:nth-child(3) {
      width: 50%;
      transform: translate(18px, -13px) rotate(-45deg);
    }
  }
`;
