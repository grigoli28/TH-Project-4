import React from "react";
import CartItem from "./CartItem";
import "./CartItemList.css";

export default function CartItemList() {
  return (
    <ul className="cart__list">
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </ul>
  );
}
