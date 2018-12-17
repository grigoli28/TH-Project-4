import React from "react";
import "./ShoppingCart.css";
import CartItemList from "./CartItemList";
import CartDetails from "./CartDetails";
import CartHeader from "./CartHeader";
import { connect } from "react-redux";
import isEmpty from "../../validation/is-empty";

function ShoppingCart({ toggleCart, visible, user, isLogged }) {
  const totalPrice = !isEmpty(user.cart)
    ? user.cart.reduce((total, curr) => curr.price + total, 0)
    : 0;

  return (
    <>
      <div
        onClick={toggleCart}
        className={`cart--wrapper ${visible && "cart--visible"}`}
      />
      <div className="cart">
        <CartHeader toggleCart={toggleCart} />
        <CartItemList
          removeItem={() => alert("Remove Item was clicked")}
          isLogged={isLogged}
          items={user.cart}
        />
        <CartDetails notEmpty={!isEmpty(user.cart)} total={totalPrice} />
      </div>
    </>
  );
}

const mapStateToProps = ({ auth }) => ({
  isLogged: auth.isAuthenticated,
  user: auth.user,
});

export default connect(mapStateToProps)(ShoppingCart);
