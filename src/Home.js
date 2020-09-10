import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="product__home">
        <h2>Visti di recente:</h2>
        <div className="product__home-row">
          <Product
            id="12321341"
            title="The Lean Startup"
            price={11.96}
            rating={5}
            img="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
          />
          <Product
            id="12321341"
            title="The Lean Startup"
            price={11.96}
            rating={5}
            img="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
          />
        </div>
        <div className="product__home-row">
          <Product
            id="12321341"
            title="The Lean Startup"
            price={11.96}
            rating={5}
            img="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
          />
          <Product
            id="12321341"
            title="The Lean Startup"
            price={11.96}
            rating={5}
            img="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
          />
          <Product
            id="12321341"
            title="The Lean Startup"
            price={11.96}
            rating={5}
            img="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
          />
        </div>
        <div className="product__home-row">
          <Product
            id="12321341"
            title="The Lean Startup"
            price={11.96}
            rating={5}
            img="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
