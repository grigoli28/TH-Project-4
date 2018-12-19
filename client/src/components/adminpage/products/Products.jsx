import React, { Component } from "react";
import axios from "axios";

import Table from "../../table/Table";

export default class Products extends Component {
  state = {
    products: null,
  };

  updateProducts = () => {
    const url = "/api/products";
    axios
      .get(url)
      .then(({ data }) => this.setState({ products: data }))
      .catch(err => console.log(err));
  };

  removeProduct = id => {
    const url = `/api/products/${id}`;
    axios
      .delete(url)
      .then(res => {
        alert("Product Removed");
        this.updateProducts();
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.updateProducts();
  }

  render() {
    return (
      <Table
        items={this.state.products}
        tHeads={["name", "price", "size", "brand", "category"]}
        remove={this.removeProduct}
        match={this.props.match}
      />
    );
  }
}
