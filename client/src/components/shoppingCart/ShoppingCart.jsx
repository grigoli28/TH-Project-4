import React from "react";
import "./ShoppingCart.css";
import CartItemList from "./CartItemList";
import CartDetails from "./CartDetails";
import CartHeader from "./CartHeader";

export default function ShoppingCart({ toggleCart, visible }) {
  return (
    <>
      <div
        onClick={toggleCart}
        className={`cart--wrapper ${visible && "cart--visible"}`}
      />
      <div className="cart">
        <CartHeader toggleCart={toggleCart} />
        <CartItemList />
        <CartDetails />
      </div>
    </>
  );
}
