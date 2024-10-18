
import { Link } from "react-router-dom"
import './EList.css'


export default function EList() {
    return (
        <div className="e-list-container">
            <div className="name">
          <h1>Partania's Mediterranean Bistro</h1>
        </div>
          <div className="e-list-header">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/reservation">Reservations</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
                </div>
        </div>
    );
}