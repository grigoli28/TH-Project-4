import React, { Component } from "react";
import "./ShoppingCart.css";
import CartItemList from "./CartItemList";
import CartDetails from "./CartDetails";
import CartHeader from "./CartHeader";

export default class ShoppingCart extends Component {
  render() {
    return (
      <div className="cart--wrapper">
        <div className="cart">
          <CartHeader />
          <CartItemList />
          <CartDetails />
        </div>
      </div>
    );
  }
}
