import React from "react";
import "./AddProduct.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default class AddProduct extends React.Component {
  render() {
    return (
      <div className="add-product">
        <div className="button-wrapper">
          <Link to="../AdminPage" className="arrow left" />
          <button
            // onClick={this.updateProduct}
            className="product-btn"
            type="button"
          >
            Add Product
          </button>
        </div>
        <div className="product-img" />
        <ul className="product-details-list">
          <li className="product-details-li">
            <div className="product-input-wrapper">
              <div>Name</div>
              <input
                ref={this.nameInput}
                name="name"
                className="product-details-input"
              />
            </div>
          </li>
          <li className="product-details-li">
            <div className="product-input-wrapper">
              <div>Size</div>
              <input
                ref={this.sizeInput}
                name="size"
                className="product-details-input"
              />
            </div>
          </li>

          <li className="product-details-li">
            <div className="product-input-wrapper">
              <div>Brand</div>
              <input
                ref={this.brandInput}
                name="brand"
                className="product-details-input"
              />
            </div>
          </li>

          <li className="product-details-li">
            <div className="product-input-wrapper">
              <div>Price</div>
              <input
                ref={this.priceInput}
                name="price"
                className="product-details-input"
              />
            </div>
          </li>

          <li className="product-details-li">
            <div className="product-input-wrapper">
              <div>Category</div>
              <input
                ref={this.categoryInput}
                name="category"
                className="product-details-input"
              />
            </div>
          </li>
        </ul>
        <br />
      </div>
    );
  }
}
