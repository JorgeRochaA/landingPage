import styled from "styled-components";

export const CardStyled = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
  height: 310px;
  width: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-family: "Inter";
  font-style: normal;
`;

export const Circle = styled.div`
  background-color: #e7eef3;
  height: 120px;
  width: 120px;
  border-radius: 50%;
  display: grid;
  place-items: center;
`;

export const CardImage = styled.img`
  height: 70%;
`;

export const CardTitle = styled.div`
  height: 30px;
  width: 152px;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  letter-spacing: -1px;
  color: #000000;
`;

export const CardDescription = styled.div`
  height: 50px;
  width: 236px;
  font-weight: 400;
  font-size: 17px;
  line-height: 25px;
  text-align: center;
  letter-spacing: -0.7px;
  color: rgba(0, 0, 0, 0.5);
`;
