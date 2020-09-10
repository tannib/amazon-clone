import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

const Product = ({ id, title, img, price, rating }) => {
  const [{}, dispatch] = useStateValue();
  const addToBasket = () => {
    // Add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        img,
        price,
        rating,
      },
    });
  };

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
              <span role="img" aria-label="star">
                &#11088;
              </span>
            ))}
        </div>
      </div>
      <img src={img} alt="" className="product__image" />
      <button onClick={addToBasket} className="product__button">
        Aggiungi al carrello
      </button>
    </div>
  );
};

export default Product;
