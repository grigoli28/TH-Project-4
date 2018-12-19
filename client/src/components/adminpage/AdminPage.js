import React from "react";
import "./AdminPage.css";
import { Route, Link } from "react-router-dom";
import Customers from "./customers/Customers";
import Messages from "./messages/Messages";
import Products from "./products/Products";

const AdminPage = ({ match }) => {
  return (
    <div className="ae">
      <input
        type="checkbox"
        id="navcheck"
        role="button"
        title="menu"
        className="admin-input"
      />

      <label
        htmlFor="navcheck"
        aria-hidden="true"
        title="menu"
        className="admin-label"
      >
        <span className="burger">
          <span className="bar">
            <span className="visuallyhidden">Menu</span>
          </span>
        </span>
      </label>
      <nav id="menu" className="admin-nav">
        <Link to="/">Store</Link>
        <Link to="/admin/customers">Customers</Link>
        <Link to="/admin/products">Products</Link>
        <Link to="/admin/messages">Messages</Link>
      </nav>
      <main>
        <Route exact path={`${match.url}/customers`} component={Customers} />
        <Route exact path={`${match.url}/messages`} component={Messages} />
        <Route exact path={`${match.url}/products`} component={Products} />
      </main>
    </div>
  );
};

export default AdminPage;
