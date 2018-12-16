import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import Provider, { Consumer } from "../provider/Provider";

const cartLength = 5;

export default function Navigation({ toggleCart }) {
  return (
    <Provider>
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
          <Consumer>
            {({ isLogged, user }) => (
              <div className="welcome-msg">
                Welcome, {isLogged ? user.name : "Guest"}!
              </div>
            )}
          </Consumer>
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
          <span onClick={toggleCart} className="cart-btn lnr lnr-cart">
            {cartLength ? (
              <span className="cart-notification">{cartLength}</span>
            ) : null}
          </span>
          <Consumer>
            {({ isLogged }) =>
              isLogged ? (
                <span className="user-logout lnr lnr-exit" />
              ) : (
                <Link to="/login">
                  <span className="user-login lnr lnr-user" />
                </Link>
              )
            }
          </Consumer>
        </div>
      </div>
    </Provider>
  );
}
