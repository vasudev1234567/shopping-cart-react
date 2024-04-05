import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate, Link } from "react-router-dom";
import Checkout from "../../components/Checkout";
import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: RS.{totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <Link to="/Checkout">
            {" "}
            <button
              onClick={() => {
                Checkout();
                navigate("/Checkout");
              }}
            >
              {" "}
              {"checkout "}
            </button>
          </Link>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
