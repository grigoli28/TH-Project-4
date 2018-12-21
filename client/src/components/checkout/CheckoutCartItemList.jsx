import React from "react";
import "./CheckoutCartItem.css";
import CheckoutCartItem from "./CheckoutCartItem";

export default function CheckoutCartItemList({ user, items, remove }) {
  return (
    <ul>
      {items &&
        items.map((item, ind) => (
          <CheckoutCartItem
            key={`${item.id}:${ind}`}
            item={item}
            remove={remove}
          />
        ))}
    </ul>
  );
}
