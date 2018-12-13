import React from "react";
import "./CartItem.css";

export default function CartItem() {
  return (
    <li className="cart__item">
      <span className="cart__item--img lnr lnr-cross">
        <img src="" alt="" />
      </span>
      <div className="cart__item--details">
        <a href="#" className="cart__item--title">
          White Sheart Pleat
        </a>
        <div className="cart__item--total">1 x $19.00</div>
      </div>
    </li>
  );
}
