import React from "react";
import { Link } from "react-router-dom";
import './menu.css'


export default function Menu() {
  return (
    <>
      
      <div className="Second-Header">
      <li><Link to="/">Home</Link></li>
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
    </>
  );
}