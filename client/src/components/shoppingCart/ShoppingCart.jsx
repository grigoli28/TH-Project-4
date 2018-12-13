import React, { Component } from "react";
import "./ShoppingCart.css";
import CartItemList from "./CartItemList";
import CartDetails from "./CartDetails";
import CartHeader from "./CartHeader";

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  handleCartClose = () => {
    this.setState(prev => ({ visible: !prev.visible }));
  };

  render() {
    return (
      <>
        <div
          onClick={this.handleCartClose}
          className={`cart--wrapper ${this.state.visible && "cart--visible"}`}
        />
        <div className="cart">
          <CartHeader hideCart={this.handleCartClose} />
          <CartItemList />
          <CartDetails />
        </div>
      </>
    );
  }
}
