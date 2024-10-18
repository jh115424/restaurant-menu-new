
import { Link } from "react-router-dom";
import "./menus.css";

export default function Menus() {
  return (
    <>
      <div className="Second-Header-container">
        <div className="name">
          <h1>Partania's Mediterranean Bistro</h1>
        </div>
        <div className="Second-Main-Header">
          <li>
            <Link style={{ textDecoration: "none" }} to="/menus">
              MENUS
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/e-list">
              JOIN E-LIST
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/reservation">
              RESERVATIONS
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/contact-us">
              CONTACT US
            </Link>
          </li>
        </div>
      </div>
    </>
  );
}
