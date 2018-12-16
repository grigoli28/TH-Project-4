import React from "react";
import CartItem from "./CartItem";
import "./CartItemList.css";

export default function CartItemList({ cartItems }) {
  return (
    <ul className="cart__list">
      {cartItems ? <h1>Items</h1> : <h1>Your cart is empty</h1>}
    </ul>
  );
}
