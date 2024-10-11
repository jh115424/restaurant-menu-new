import React from "react";
import { Link } from "react-router-dom"


export default function ContactUs() {
    return (
        <div>
            <h1>Contact Us</h1>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <label>
                    Message:
                    <textarea name="message" rows={4} cols={50}></textarea>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}