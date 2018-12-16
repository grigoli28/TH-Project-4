import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="header-nav">
      <ul className="main-nav">
        <li className="main-nav__item">
          <Link to="/men" className="main-nav__link">
            Men
          </Link>
        </li>
        <li className="main-nav__item">
          <Link to="/women" className="main-nav__link">
            Women
          </Link>
        </li>
        <li className="main-nav__item">
          <Link to="/about" className="main-nav__link">
            About Us
          </Link>
        </li>
        <li className="main-nav__item">
          <Link to="/contact" className="main-nav__link">
            Contact
          </Link>
        </li>
      </ul>
      <span className="title">
        <Link to="/" className="main-nav__link">
          LIMITED
          <br />
          EDITION
        </Link>
      </span>

      <div className="aditional-nav">
        <div className="search">
          <span className="search-btn lnr lnr-magnifier" />
          <input
            id="search"
            className="search__input"
            name="search"
            placeholder="Search"
            hidden
          />
        </div>
        <Link to="/login">
          <span className="user-login lnr lnr-user" />
        </Link>
        <span className="cart-btn lnr lnr-cart">
          <span className="cart-notification">6</span>
        </span>
      </div>
    </div>
  );
}
