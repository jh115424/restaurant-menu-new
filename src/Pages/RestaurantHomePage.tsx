import React from "react";
import { Link } from "react-router-dom";
import "./restaurantHomePage.css";
import mainImage from "./images/mainImage.jpeg";

export default function RestaurantHomePage() {
  return (
    <>
      <div className="container">
        <div className="name">
          <h1>Partania's Mediterranean Bistro</h1>
        </div>
        <div className="Main-Header">
          <li>
            <Link to="/e-list">JOIN E-LIST</Link>
          </li>
          <li>
            <Link to="/reservation">RESERVATIONS</Link>
          </li>
          <li>
            <Link to="/contact-us">CONTACT US</Link>
          </li>
        </div>
      </div>
      <img src={mainImage} alt="salmon" className="main-image" />
      <div className="anniversary-banner-box">
        <p>10 YEAR ANNIVERSARY</p>
      </div>

      <div className="brief-history">
        <div className="history-header">
          <h1>MODERN.FRESH.AUTHENTIC</h1>
        </div>
        <div className="history-text">
          <p>
            Partania's Mediterranean Bistro is a family owned and operated
            restaurant located in the heart of downtown Chicago on Michigan Avenue. 
            The restaurant was founded in 2014 by Chef Rick Partania
            and his wife Jennifer, who wanted to bring the flavors of the Mediterranean
            to Chicago. The restaurant is named after Chef Partania's
            grandmother, who was a chef in Greece. The restaurant is known for
            its fresh, authentic Mediterranean cuisine, and its warm and
            welcoming atmosphere. The restaurant is open for lunch and dinner,
            and offers a variety of Mediterranean dishes, including hummus,
            falafel, and tabbouleh. The restaurant is also known for its wine
            list, which includes a variety of wines from around the world. 
          </p>
        </div>
      </div>
    </>
  );
}
