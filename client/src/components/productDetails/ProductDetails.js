import "./ProductDetails.css";
import Shirt from "./t-shirt.jpg";
import React, { Component } from "react";

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Premium t-shirt",
      id: "e11a85f0-fd46-11e8-8fd8-897319b1388b",
      name: "Premium t-shirt",
      price: 1000,
      size: "XL",
    };
  }
  render() {
    return (
      <div className="product-details-wrapper">
        <div className="product-image-wrapper">
          <img className="product-image" src={Shirt} alt="t-shirt" />
        </div>

        <div className="product-details">
          <div className="product-name">{this.state.name}</div>
          <div className="product-price">{this.state.price}$</div>
          <div className="product-size-wrapper">
            <span className="product-size">{this.state.size}</span>
          </div>
          <div className="product-description-wrapper">
            <div className="product-description-title">Description</div>
            <p className="product-description">
              some bullshit about how great this shirt is some bullshit about
              how great this shirt is again some bullshit about how great this
              shirt is again some bullshit about how great this shirt is again
            </p>
          </div>
          <button
            className="add-to-cart-btn"
            onClick={() =>
              alert(
                `added to cart: ${this.state.name}, ${this.state.price}$, ${
                  this.state.size
                }`
              )
            }
          >
            Add To Cart
          </button>
        </div>
      </div>
    );
  }
}
