import styled from "styled-components";

const media = {
  desktop: "@media screen and (min-width: 1134px)",
};

export const BlogCardStyled = styled.div`
  margin-top: 98px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column !important;
  align-items: center;
  ${media.desktop} {
    width: 410px;
  }
`;
export const BlogCardImage = styled.div`
  width: 174px;
  height: 174px;
`;
export const BlogCardTitle = styled.div`
  width: 327px;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: -0.8px;
  margin-top: 71px;
  text-align: center;
  ${media.desktop} {
    align-self: flex-start;
    margin-left: 55px;
    text-align: left;
  }
`;

export const BlogCardDescription = styled.div`
  width: 327px;
  height: 50px;
  font-weight: 500;
  font-size: 17px;
  line-height: 25px;
  letter-spacing: -0.7px;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 13px;
  text-align: center;
  ${media.desktop} {
    align-self: flex-start;
    margin-left: 55px;
    text-align: left;
  }
`;

export const BlogCardButton = styled.div`
  display: grid;
  place-items: center;
  padding: 10px 15px;
  gap: 10px;
  min-width: 59px;
  height: 25px;
  background: rgba(42, 182, 145, 0.11);
  border-radius: 5px;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  letter-spacing: -0.7px;
  color: #2ab691;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-top: 19px;
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    background-color: #2ab691;
    color: white;
  }
  ${media.desktop} {
    align-self: flex-start;
    padding: 0px 10px;
    font-size: 13px;
    margin-left: 55px;
    text-align: center;
    justify-content: center;
  }
`;
