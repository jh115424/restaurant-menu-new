import React from "react";
import { Link } from "react-router-dom";
import "./reservationPage.css"

export default function ReservationPage() {
  return (
    <div className="reservation-container">
      <div className="name">
        <h1>Partania's Mediterranean Bistro</h1>
      </div>
      <div className="Reservation-Main-Header">
      <li><Link style={{textDecoration: 'none'}} to="/">Home</Link></li>
        <li>
          <Link style={{textDecoration: 'none'}} to="/e-list">JOIN E-LIST</Link>
        </li>
        <li>
          <Link style={{textDecoration: 'none'}} to="/reservation">RESERVATIONS</Link>
        </li>
        <li>
          <Link style={{textDecoration: 'none'}} to="/contact-us">CONTACT US</Link>
        </li>
      </div>
    </div>
  );
}

