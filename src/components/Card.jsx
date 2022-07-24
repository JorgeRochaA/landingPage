import React from "react";
import {
  CardStyled,
  Circle,
  CardImage,
  CardTitle,
  CardDescription,
} from "../styles/Card";
function Card({ url, title, description }) {
  return (
    <CardStyled>
      <Circle>
        <CardImage src={url} alt={title} />
      </Circle>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardStyled>
  );
}

export default Card;
