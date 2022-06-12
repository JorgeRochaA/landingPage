import React from "react";
import "../styles/Card/Card.scss";
function Card({ url, title, description }) {
  return (
    <div className="card">
      <div className="circle">
        {" "}
        <img src={url} alt={title} />
      </div>
      <div className="card_title">{title}</div>
      <div className="card_description">{description}</div>
    </div>
  );
}

export default Card;
