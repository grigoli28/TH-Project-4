import React from "react";
import "./ProductDet.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default class ProductDetails extends React.Component {
  state = {
    Product: null
  };
  componentDidMount() {
    const currentProduct = this.props.match.params.prodId;
    const url = `http://localhost:5000/api/products/${currentProduct}`;
    axios
      .get(url)
      .then(({ data }) => {
        this.setState({
          Product: data
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    // let { Product } = this.state.Product;
    return (
      <div className="res-messages">
        <Link to="../messages" className="arrow left" />
        <div className="product-img" />
        <ul className="product-details-list">
            <li className="product-details-li">Name: <span>{this.state.Product && this.state.Product.name}</span></li>
            <li className="product-details-li">Price: <span>{this.state.Product && this.state.Product.price} </span></li>
            <li className="product-details-li">Size: <span>{this.state.Product && this.state.Product.size}</span></li>
            <li className="product-details-li">Category: <span>{this.state.Product && this.state.Product.category}</span></li>
            <li className="product-details-li">Brand: <span>{this.state.Product && this.state.Product.brand}</span></li>
        </ul>

      </div>
    );
  }
}
