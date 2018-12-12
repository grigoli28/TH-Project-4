import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="header-nav">
      <ul className="main-nav">
        <li className="main-nav__item">
          <Link className="main-nav__link" to="">
            Men
          </Link>
        </li>
        <li className="main-nav__item">
          <Link className="main-nav__link" to="">
            Women
          </Link>
        </li>
        <li className="main-nav__item">
          <Link className="main-nav__link" to="">
            About Us
          </Link>
        </li>
        <li className="main-nav__item">
          <Link className="main-nav__link" to="">
            Contact
          </Link>
        </li>
      </ul>
      <span className="title">
        LIMITED
        <br />
        EDITION
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
        <Link to="">
          <span className="user-login lnr lnr-user" />
        </Link>
        <span className="cart-btn lnr lnr-cart">
          <span className="cart-notification">6</span>
        </span>
      </div>
    </div>
  );
}
