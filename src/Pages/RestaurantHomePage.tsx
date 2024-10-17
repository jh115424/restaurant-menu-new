import { Link } from "react-router-dom";
import "./restaurantHomePage.css";
import mainImage from "./images/mainImage.jpeg";
import celebrate from "./images/celebrate.jpg";

export default function RestaurantHomePage() {
  return (
    <>
      <div className="container">
        <div className="name">
          <h1>Partania's Mediterranean Bistro</h1>
        </div>
        <div className="Main-Header">
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
            restaurant located in the heart of downtown Chicago on Michigan
            Avenue. The restaurant was founded in 2014 by Chef Ricky Partania
            and Jennifer Hodge, who wanted to bring the flavors of the
            Mediterranean to Chicago. The restaurant is named after Chef
            Partania's grandmother, who was a chef in Greece. The restaurant is
            known for its fresh, authentic Mediterranean cuisine, and its warm,
            modern and welcoming atmosphere. The restaurant is open for lunch
            and dinner, and offers a variety of Mediterranean dishes, including
            hummus, falafel, and tabbouleh. The restaurant is also known for its
            wine list, which includes a variety of wines from around the world.
          </p>
        </div>
      </div>

      <div className="interior-page-container">
        <div className="interior-page-header">
          <h1>The Space</h1>
        </div>
        <div className="interior-page-image-banner">
          <img
            src={celebrate}
            alt="celebrate"
            className="interior-page-image-banner"
          />
        </div>
        <div className="space-buttons">
          <div className="interior-page-button">
            <Link
              style={{ textDecoration: "none" }}
              to="/interior"
              className="interior"
            >
              SEE INSIDE
            </Link>
          </div>
          <div className="interior-page-eList-button">
            <Link style={{ textDecoration: "none" }} to="/e-list">
              JOIN OUR E-LIST
            </Link>
          </div>
        </div>
      </div>
      <div className="menu-options-container">
        <div className="menu-options-banner">
          <h1 className="menu-intro-title">OUR MENUS</h1>
         

        </div>
        <div className="bottom-menu-page-button">
            <Link
              style={{ textDecoration: "none" }}
              to="/interior"
              className="interior"
            >
              MENU
            </Link>
          </div>
       
      </div>
      <div className="footer">
        <p>2024 Partania's Mediterranean Bistro</p>
      </div>
    </>
  );
}
