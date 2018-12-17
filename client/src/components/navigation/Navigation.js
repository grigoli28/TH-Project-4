import React from "react";
import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

const Navigation = ({ toggleCart, isLogged, user, logoutUser }) => {
  return (
    <div className="header-nav">
      <ul className="main-nav">
        <li className="main-nav__item">
          <NavLink
            exact
            activeClassName="active-nav-link"
            to="/men"
            className="main-nav__link"
          >
            Men
          </NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink
            exact
            activeClassName="active-nav-link"
            to="/women"
            className="main-nav__link"
          >
            Women
          </NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink
            exact
            activeClassName="active-nav-link"
            to="/about"
            className="main-nav__link"
          >
            About Us
          </NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink
            exact
            activeClassName="active-nav-link"
            to="/contact"
            className="main-nav__link"
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <span className="title">
        <NavLink to="/" className="main-nav__link">
          LIMITED
          <br />
          EDITION
        </NavLink>
      </span>

      <div className="aditional-nav">
        <div className="welcome-msg">
          Welcome, {isLogged && user ? user.name.split(" ")[0] : "Guest"}!
        </div>
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
          {user.cart && user.cart.length ? (
            <span className="cart-notification">{user.cart.length}</span>
          ) : null}
        </span>
        {isLogged ? (
          <span
            onClick={() => {
              localStorage.removeItem("_auth_user_");
              logoutUser();
            }}
            className="user-logout lnr lnr-exit"
          />
        ) : (
          <Link to="/login">
            <span className="user-login lnr lnr-user" />
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({
  isLogged: auth.isAuthenticated,
  user: auth.user,
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navigation);
