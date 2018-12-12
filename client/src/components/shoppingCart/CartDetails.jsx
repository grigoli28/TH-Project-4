import React from "react";
import "./CartDetails.css";

export default function CartDetails() {
  return (
    <div className="cart__details">
      <div className="cart__total">Total: $75.00</div>
      <div className="cart__btn--wrapper">
        <button className="cart__btn">VIEW CART</button>
        <button className="cart__btn">CHECK OUT</button>
      </div>
    </div>
  );
}
