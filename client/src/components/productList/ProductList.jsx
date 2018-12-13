import React, { Component } from "react";
import "./ProductList.css";
import axios from "axios";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: null };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/products/")
      .then(({ data }) => this.setState({ products: data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.products ? (
          this.state.products.map(prod => <h1 key={prod.id}>{prod.name}</h1>)
        ) : (
          <h1>Loading Products...</h1>
        )}
      </div>
    );
  }
}
