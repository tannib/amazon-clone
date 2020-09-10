import React from "react";
import "./Product.css";

const Product = ({ id, title, img, price, rating }) => {
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>€</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span>&#11088;</span>
            ))}
        </div>
      </div>
      <img src={img} alt="" className="product__image" />
      <button className="product__button">Add to basket</button>
    </div>
  );
};

export default Product;
