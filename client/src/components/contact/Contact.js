import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div>
      <div className="top-image">
        <h1 className="contact">Contact</h1>
        <div className="contact-flex-container">
          <div className="container-1">
            <form>
              <p className="contact-text">Send Us A Message</p>
              <input className="contact-input" placeholder="Your Email" />

              <textarea
                className="contact-textarea"
                placeholder="How Can We Help"
              />
              <br />
              <button className="contact-btn" type="submit">
                SUBMIT
              </button>
            </form>
          </div>
          <div className="container-2">
            <div className="contact-address">
              <i className="fas fa-map-marker-alt" />
              <p>Address</p>
            </div>
            <div className="address-nav">
              <p>Rustaveli Avenu 10</p>
              <span>Georgia Tbilisi</span>
            </div>
            <div className="contact-number">
              <i class="fas fa-phone" />
              <p>Contact Us</p>
            </div>
            <div className="address-nav">
              <p>+995 598 887 918</p>
            </div>
            <div className="contact-number">
              <i class="fas fa-envelope" />
              <p>Sale Support</p>
            </div>
            <div className="address-nav">
              <p>contact@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
