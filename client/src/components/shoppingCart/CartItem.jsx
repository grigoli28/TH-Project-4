import React from "react";
import { Link } from "react-router-dom";

import "./CartItem.css";

export default function CartItem({
  id,
  gender,
  title,
  price,
  img,
  removeItem,
}) {
  return (
    <li className="cart__item">
      <span onClick={removeItem} className="cart__item--img lnr lnr-cross">
        <img src="" alt="" />
      </span>
      <div className="cart__item--details">
        <Link replace to={`/${gender}/${id}`} className="cart__item--title">
          {title}
        </Link>
        <div className="cart__item--total">1 x ${price}</div>
      </div>
    </li>
  );
}
