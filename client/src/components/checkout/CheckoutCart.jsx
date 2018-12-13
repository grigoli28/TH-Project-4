import React, { Component } from "react";
import "./CheckoutCart.css";
import CheckoutCartItemList from "./CheckoutCartItemList";

export default class CheckoutCart extends Component {
  render() {
    return (
      <div className="checkout">
        <div className="checkout__cart">
          <div className="checkout__cart--head">
            <span>PRODUCT</span>
            <span>PRICE</span>
            <span>QUANTITY</span>
            <span>TOTAL</span>
          </div>
          <CheckoutCartItemList />
        </div>
        <div className="checkout__total">TOTAL</div>
      </div>
    );
  }
}
