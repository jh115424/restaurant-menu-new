import { Link } from "react-router-dom";
import "./restaurantHomePage.css";
import mainImage from "./images/mainImage.jpeg";
import celebrate from "./images/celebrate.jpg";
import dinnerPrepare from "./images/dinnerPrepare.png";
import footerLogo from "./images/footerLogo.webp";
import ravioli from "./images/ravioli.jpg";
import sandwich from "./images/sandwich.jpg";
import salad from "./images/salad.jpg";
import pesto from "./images/pesto.jpg";
import choppedSteak from "./images/choppedSteak.jpg";

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
          <div className="menu-and-private-button-container">
            <div className="bottom-menu-page-button">
              <Link
                style={{ textDecoration: "none" }}
                to="/interior"
                className="interior"
              >
                MENU
              </Link>
            </div>
            <div className="private-menu-button">
              <Link
                style={{ textDecoration: "none" }}
                to="/private-events"
                className="private-events"
              >
                PRIVATE EVENTS
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="serving-container">
        <div className="event-planning">
          <h1>Looking to Have Your Next Event at Partania's?</h1>
          <h1 className="sub-header">PRIVATE SPACE</h1>
          <hr />
          <div className="event-rules">
            <h5>Seated:</h5>
            <p>75 guests</p>
            <br />
            <h5>Reception-style:</h5>
            <p>150 guests</p>
            <br />
            <h5>Elevator:</h5>
            <p>No</p>
            <br />
            <h5>Restaurant Buy-Outs:</h5>
            <p>Yes (Sun-Thurs only)</p>
          </div>
        </div>
        <div className="tax-rate">
          <h5>Sales Tax:</h5>
          <p>8.4%</p>
          <br />
          <h5>Service Charge</h5>
          <p>24%</p>
          <br />
          <h5>Parking:</h5>
          <p>
            Street parking (free after 6pm) Parking structures within 2 blocks
            (Milwaukee St & corner of Water & N. Michigan Ave.)
          </p>
        </div>

        <div className="event-planning-image">
          <img
            src={dinnerPrepare}
            alt="dinner prepare"
            className="event-planning-image"
          />
        </div>
      </div>
      <div className="guest-loyalty-container">
        <div className="loyalty">
          <h5>
            PREFERRED GUEST LOYALTY<br></br>PROGRAM
          </h5>
          <h6>
            START EARNING DELICIOUS REWARDS IN A<br></br>FEW SIMPLE CLICKS
          </h6>
          <p>
            $1 = 1 POINT<br></br>150 POINTS = $15 REWARD
          </p>
          <p>
            Rewards are redeemable at all Benson's Restaurant<br></br>Group
            locations: The Edison, AJ Bombers, Blue Bat<br></br>Kitchen, Smoke
            Shack, Onesto, and The Bridgewater
            <img className="footer-image" src={footerLogo} alt="footer" />
          </p>
        </div>

        <div className="sign-up">
          THREE WAYS TO SIGN UP:
          <p>1. online</p>
          <p>2. Sign up at the restaurant</p>
          <p>3. Text "PARTANIA" to 844-248-2672</p>
          <div className="help">
            <h4>Need assistance with loyalty?</h4>
            <h4>Email us at loyalty@partania.com</h4>
          </div>
          <div className="loyalty-button">
            <Link
              style={{ textDecoration: "none" }}
              to="/sign-up"
              className="sign-up-button"
            >
              {" "}
              SIGN UP
            </Link>
          </div>
        </div>
      </div>
      <div className="dinner-carousel">
        
        <img className="pic-slide" src={ravioli} alt="pic-slide" />
        <img className="pic-slide" src={salad} alt="pic-slide" />
        <img className="pic-slide" src={sandwich} alt="pic-slide" />
        <img className="pic-slide" src={pesto} alt="pic-slide" />
        <img className="pic-slide" src={choppedSteak} alt="pic-slide" /> 
       

      </div>
      
      {/* <div className="footer">
        <p>2024 Partania's Mediterranean Bistro</p>
        <p>634 Michigan Ave, Chicago, IL 60601</p>
        <p>Phone: 1-312-664-3746</p>
        <p>Email: info@partaniasmediterraneanbistro.com</p>
        <p>We look forward to hosting you on one of our private events!</p>
      </div> */}


    </>
  );
}
