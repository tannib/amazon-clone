import React from "react";
import "./Card.css";

const Card = ({ title, src, caption, link }) => {
  return (
    <div className="card">
      <div className="card__info">
        <h2 className="card__title">{title}</h2>
        <img className="card__img" src={src} alt="" />
        <p className="card__caption">{caption}</p>
        <p className="card__link">{link}</p>
      </div>
    </div>
  );
};

export default Card;
