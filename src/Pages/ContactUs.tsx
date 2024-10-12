import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import { useState } from "react";

export default function ContactUs({ setUserData, userData }: { setUserData: (data: { name: string; email: string; message: string }) => void; userData: any }) {
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
      
      <div className="contact-container">
        <div className="name">
          <h1>Partania's Mediterranean Bistro</h1>
        </div>
        <div className="Contact-Header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/e-list">JOIN E-LIST</Link>
          </li>
          <li>
            <Link to="/reservation">RESERVATIONS</Link>
          </li>
          <li>
            <Link to="/contact-us">CONTACT US</Link>
          </li>
        </div>
      </div>

      <div className="form-container">
        <h1>Contact Us</h1>
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
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
      
