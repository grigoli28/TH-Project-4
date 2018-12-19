import React, { Component } from "react";
import axios from "axios";

import Table from "../../table/Table";

export default class Customers extends Component {
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
      <Table
        items={this.state.customers}
        tHeads={["name", "email", "balance"]}
        remove={this.removeCustomer}
        match={this.props.match}
      />
    );
  }
}
