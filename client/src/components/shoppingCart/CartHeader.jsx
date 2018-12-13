import React from "react";
import "./CartHeader.css";

export default function CartHeader({hideCart}) {
  return (
    <div className="cart__header">
      <span className="cart__title">YOUR CART</span>
      <span className="cart__close" onClick={hideCart}>
        <span className="lnr lnr-cross" />
      </span>
    </div>
  );
}
