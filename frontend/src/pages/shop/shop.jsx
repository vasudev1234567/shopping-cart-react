import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import banner from "../../assets/products/banner.jpg";
export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <section className="hero" style={{ backgroundImage: `url(${banner})` }}>
          <div className="content">
            <h1>The daily grind coffee house</h1>
            <p> Where every cup is a fresh brew of perfection</p>
          </div>
        </section>

        <h1>Top Selling</h1>
        <p> Make your mornings better with our top-selling product.</p>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
