import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="flex-container">
      
      <div>
        <h3 className="brand">About Brand</h3>
        <p>
          Essence is stylish concept of nowadays fashion , limiited collections
          from different designers and etc
        </p>
      </div>
      <div>
        <h3>Information</h3>
        <ul>
          <li>Privacy and policy</li>
          <li>FAQ</li>
          <li>payment</li>
        </ul>
      </div>
      <div>
        <h3>Contacts</h3>
        <ul>
          <li>+995 598 887 918</li>
          <li>Essence@gmail.com</li>
          <li>open hours M-F 10:00-19:00</li>
        </ul>
      </div>
      <div>
        <h3>Address</h3>
        <ul>
          <li>Tbilisi</li>
          <li>Rustaveli Ave. 10</li>
          <li>Map</li>
        </ul>
      </div>
      <div>
          <h3>Social Network</h3>
          <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
          </ul>
      </div>
    </div>
  );
}