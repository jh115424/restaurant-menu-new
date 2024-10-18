import { Link } from "react-router-dom";
import "./privateEvents.css";

export default function PrivateEvents() {
  return (
    <>
    <div className="private-events-container">
      <div className="name">
        <h1>Partania's Mediterranean Bistro</h1>
      </div>
      <div className="private-events-header">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/e-list">Join E-List</Link>
        </li>
        <li>
          <Link to="/reservation">Reservations</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link to="/menus">Menus</Link>
        </li>
        <li>
          <Link to="/interior">Interior</Link>
        </li>
      </div>
      </div>
      <div className="private-events-text">
        <h1>Private Events</h1>
        <p>
          We are excited to announce the launch of our private events section!
          We invite you to join us for a special dining experience that will be
          unlike any other. We will be hosting private parties, dinner parties,
          and celebrations for our guests. We will be offering a variety of
          delicious and custom items for you to enjoy.
        </p>
        <p>
          For more information about our private events, please contact us at
          123-456-7890 or visit our website at
          www.partaniasmediterraneanbistro.com.
        </p>
        <p>We look forward to hosting you on one of our private events!</p>
      </div>
      <div className="private-events-button">
        <Link to="/contact-us">Contact Us</Link>
      </div>
      </>
  );
}