import React from "react";
import "./CartItem.css";

export default function CartItem({ title, price, img, removeItem }) {
  return (
    <li className="cart__item">
      <span onClick={removeItem} className="cart__item--img lnr lnr-cross">
        <img src="" alt="" />
      </span>
      <div className="cart__item--details">
        <a href="#" className="cart__item--title">
          {title}
        </a>
        <div className="cart__item--total">1 x ${price}</div>
      </div>
    </li>
  );
}
