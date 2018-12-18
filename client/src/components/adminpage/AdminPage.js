import React, { Component } from "react";
import "./AdminPage.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import Table from "../table/Table";

class AdminPage extends Component {
  state = {
    customers: null,
  };

  updateCustomers = () => {
    const url = "/api/customers";
    axios
      .get(url)
      .then(({ data }) => this.setState({ customers: data }))
      .catch(err => console.log(err));
  };

  removeCustomer = id => {
    const url = `/api/customers/${id}`;
    axios
      .delete(url)
      .then(res => {
        alert("Customer Removed");
        this.updateCustomers();
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.updateCustomers();
  }

  render() {
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
          <Link to="/admin/messages">Messages</Link>
        </nav>
        <main>
          <Table
            items={this.state.customers}
            tHeads={["name", "email", "balance"]}
            remove={this.removeCustomer}
            match={this.props.match}
          />
        </main>
      </div>
    );
  }
}

export default AdminPage;
