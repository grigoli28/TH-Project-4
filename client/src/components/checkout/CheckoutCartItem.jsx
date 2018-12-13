import React from "react";

export default function CheckoutCartItem() {
  return (
    <li className="checkout__cart--item">
      <span className="checkout__cart--img lnr lnr-cross">
        <img src="" alt="" />
      </span>
      <a href="#" className="checkout__cart--title">
        White Sheart Pleat
      </a>
      <div className="checkout__cart--price">$19.00</div>
      <div className="checkout__cart--quantity">
        <div className="quantity-btn">
          <i className="fas fa-minus" />
        </div>
        <input className="quantity-input" type="number" min="0" value="1" />
        <div className="quantity-btn">
          <i className="fas fa-plus" />
        </div>
      </div>
      <div className="checkout__cart--price-total">$19.00</div>
    </li>
  );
}
