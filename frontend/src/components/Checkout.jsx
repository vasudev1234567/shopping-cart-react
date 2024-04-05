// ResponsiveRegistrationForm.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/Checkout.css"; // Import the CSS file

function ResponsiveRegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div className="container">
      <div className="part">
        <form action="#">
          <div className="user-details">
            <div className="input-box">
              <span className="details">Name</span>
              <input
                type="text"
                placeholder="Enter your name"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>

            <div className="input-box">
              <span className="details">Email</span>
              <input
                type="text"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-box">
              <span className="details">Phone Number</span>
              <input
                type="text"
                placeholder="Enter your number"
                required
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="input-box">
              <span className="details">Address</span>
              <input
                type="text"
                placeholder="Enter your Address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>

          <Link to="/thankyou">
            {" "}
            <div className="button">
              <button
                type="submit"
                value="Place Order"
                disabled={!name || !email || !number || !address}
                title={
                  !name || !email || !number || !address
                    ? "Please fill out all fields"
                    : "Submit"
                }
              >
                Submit
              </button>
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default ResponsiveRegistrationForm;
