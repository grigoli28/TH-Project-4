import React from "react";
import CartItem from "./CartItem";
import "./CartItemList.css";
import isEmpty from "../../validation/is-empty";

export default function CartItemList({ isLogged, items, removeItem }) {
  return (
    <ul className="cart__list">
      {isLogged ? (
        !isEmpty(items) ? (
          items.map(({ id, name, price }) => (
            <CartItem
              removeItem={removeItem}
              key={id}
              title={name}
              price={price}
            />
          ))
        ) : (
          <h1 className="cart-empty-msg">Cart is empty!</h1>
        )
      ) : (
        <h1 className="cart-empty-msg">Please, Log In!</h1>
      )}
    </ul>
  );
}
