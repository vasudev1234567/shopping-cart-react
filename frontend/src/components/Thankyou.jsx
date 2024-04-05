import React from "react";
import ok from "../assets/products/ok.png";
import { Link } from "react-router-dom";

const Thankyou = () => {
  return (
    <div style={{ textAlign: "center" }}>
      {/* Apply CSS styles to the image */}
      <img
        src={ok}
        alt="Example"
        style={{
          marginTop: 60,
          width: "40%",
          height: "0%",
          display: "block",
          margin: "0 auto",
        }}
      />
      <h2>Order Confirmed</h2>
      <Link to="/">
        <button
          style={{
            marginTop: 20,
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#bfa41b",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s ease",
          }}
        >
          Continue Shop
        </button>
      </Link>
    </div>
  );
};

export default Thankyou;
