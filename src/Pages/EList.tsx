import React from "react";
import { Link } from "react-router-dom"


export default function EList() {
    return (
        <div>
            <h1>E-List</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/reservation">Reservations</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
        </div>
    );
}