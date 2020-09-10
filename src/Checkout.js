import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/29/x-site/Update_MAPLE-VC._CB449118062_.jpg"
          alt=""
          className="checkout__ad"
        />
        {basket?.length === 0 ? (
          <div className="basket__empty">
            <img
              src="https://m.media-amazon.com/images/G/29/cart/empty/kettle-desaturated._CB424694249_.svg"
              alt=""
            />
            <div className="basket__empty-info">
              <h2>Il tuo carrello Amazon è vuoto</h2>
              <p>
                Non hai nessun oggetto nel carrello. Per comprare clicca
                "Aggiungi al carrello" accanto all'oggetto.
              </p>
            </div>
          </div>
        ) : (
          <div className="basket__not__empty">
            <h2 className="checkout__title">Il tuo carrello </h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                img={item.img}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
