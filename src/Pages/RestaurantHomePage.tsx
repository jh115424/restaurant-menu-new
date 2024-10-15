import React from "react";
import { Link } from "react-router-dom";
import "./restaurantHomePage.css";
import mainImage from './images/mainImage.jpeg'

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
  
    </>
  );
}
