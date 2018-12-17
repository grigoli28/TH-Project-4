import React from "react";
import "./CartDetails.css";

export default function CartDetails({ total, notEmpty }) {
  return (
    <div className="cart__details">
      {total ? <div className="cart__total">Total: ${total}</div> : null}
      <div className="cart__btn--wrapper">
        {notEmpty && <button className="cart__btn">CHECK OUT</button>}
      </div>
    </div>
  );
}
