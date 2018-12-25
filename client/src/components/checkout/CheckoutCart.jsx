import React, { Component } from "react";
import { connect } from "react-redux";
import "./CheckoutCart.css";
import CheckoutCartItemList from "./CheckoutCartItemList";
import { updateCart } from "../../actions/authActions";
import axios from "axios";

class CheckoutCart extends Component {
  removeItemFromCart = prodId => {
    const id = this.props.user.id;
    const url = `http://localhost:5000/api/customers/${id}/cart/${prodId}`;

    axios
      .delete(url)
      .then(({ data }) => {
        const url = `http://localhost:5000/api/customers/${id}/cart`;

        axios
          .get(url)
          .then(({ data }) => this.props.updateCart(data))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  render() {
    const { cart } = this.props.user;
    const totalCost =
      cart &&
      cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const { balance } = this.props.user;
    const difference = balance - totalCost;
    console.log(this.props.user)

    return (
      <div className="checkout">
        <div className="checkout__cart">
          <div className="checkout__cart--head">
            <span>PRODUCT</span>
            <span>PRICE</span>
            <span>QUANTITY</span>
            <span>TOTAL</span>
          </div>
          <CheckoutCartItemList
            items={this.props.user.cart}
            remove={this.removeItemFromCart}
          />
        </div>
        <div className="checkout__total--wrapper">
          <div className="checkout__total--title">Cart Total</div>
          <div className="checkout__shipping">
            <span className="shipping-cost">Shipping:</span>
            <span>Free Shipping!</span>
          </div>
          <div className="checkout--total">
            <span>Total:</span>
            <span>${totalCost}</span>
          </div>
          <div className="checkout--balance--wrapper">
            <span>Your Balance:</span>
            <span>${balance}</span>
          </div>
          <button
            className={`checkout-cart-btn ${difference < 0 ? "disabled" : ""}`}
            title={`${difference < 0 ? "Insufficient Funds!" : ""}`}
            type="button"
          >
            Checkout
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
});

export default connect(
  mapStateToProps,
  { updateCart }
)(CheckoutCart);
