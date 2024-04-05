import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css"; // You can keep this for additional styles
import icon from "../assets/products/icon.webp"; // Import your logo image

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container logo-margin">
        <img
          src={icon}
          alt="Logo"
          className="logo"
          style={{ width: "50px", height: "50px" }}
        />
      </div>
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
      <div className="cart-icon">
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
