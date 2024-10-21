import { Link } from "react-router-dom"
import "./signUp.css"
export default function SignUp() {
  return (
    <>
      <div className="sign-up-container">
        <div className="name">
          <h1>Partania's Mediterranean Bistro</h1>
        </div>
        <div className="sign-up-header">
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
      </>
      )
  }
  
