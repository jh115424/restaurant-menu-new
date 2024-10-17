import { Link } from "react-router-dom";
import './interior.css'


export default function Interior () {
    return (
        <div className="interior-container">
            <div className="name">
          <h1>Partania's Mediterranean Bistro</h1>
        </div>
          <div className="interior-header">
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
          <li>
            <Link style={{textDecoration: 'none'}} to="/menu">MENU</Link>
          </li>
        </div>
        </div>
    )
}







