import React from "react";
import "./AdminPage.css";
import { Route, NavLink } from "react-router-dom";
import Customers from "./customers/Customers";
import Messages from "./messages/Messages";
import Products from "./products/Products";

const AdminPage = ({ match }) => {
  return (
    <div className="container">
      <nav>
        <ul className="admin-nav">
          <li className="admin-nav__item">
            <NavLink
              exact
              activeClassName="active-admin-link"
              to="/"
              className="admin-nav__link"
            >
              Store
            </NavLink>
          </li>
          <li className="admin-nav__item">
            <NavLink
              exact
              activeClassName="active-admin-link"
              to="/admin/customers"
              className="admin-nav__link"
            >
              Customers
            </NavLink>
          </li>
          <li className="admin-nav__item">
            <NavLink
              exact
              activeClassName="active-admin-link"
              to="/admin/products"
              className="admin-nav__link"
            >
              Products
            </NavLink>
          </li>
          <li className="admin-nav__item">
            <NavLink
              exact
              activeClassName="active-admin-link"
              to="/admin/messages"
              className="admin-nav__link"
            >
              Messages
            </NavLink>
          </li>
        </ul>
      </nav>

      <Route exact path={`${match.url}/customers`} component={Customers} />
      <Route exact path={`${match.url}/messages`} component={Messages} />
      <Route exact path={`${match.url}/products`} component={Products} />
    </div>
  );
};

export default AdminPage;
