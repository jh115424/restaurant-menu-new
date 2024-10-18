import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import salmonHeader from "./images/salmonHeader.png";

export default function ContactUs({
  setUserData,
}: {
  setUserData: (data: { name: string; email: string; message: string }) => void;
  userData: any;
}) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setUserData({
      name: name,
      email: email,
      message: message,
    });
    setName("");
    setEmail("");
    setMessage("");
    console.log("Form submitted:", { name, email, message });
  };


  return (
    <>
      {submitted && (
        <div className="success-message">
          <h2>Thank you for contacting us!</h2>
          <p>We will get back to you shortly.</p>
        </div>
      )}

      <div style={{ backgroundColor: "lightskyblue", height: "900px" }}>
        <div className="contact-container">
          <div className="name">
            <h1>Partania's Mediterranean Bistro</h1>
          </div>
          <div className="Contact-Header">
            <li>
              <Link style={{textDecoration: 'none'}} to="/">Home</Link>
            </li>
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
        <img src={salmonHeader} alt="salmon" className="salmon-header" />

        <div className="form-container">
          <div className="email-sign-up">
            <h1>Sign up for email updates from us!</h1>
            <h1>Please enter an email address</h1>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Message:
              <textarea
                name="message"
                rows={4}
                cols={50}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </label>
            <button className="button" type="submit">
              Submit
            </button>
          </form>
          <p className="terms">
            By providing your email, you are agreeing to participate in the
            marketing program and to be contacted through this email as part of
            the program. We will not sell your information.
          </p>
        </div>
      </div>

   
    </>
  );
}