import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import PurchasedItem from "./PurchasedItem";
import "./PurchasedProducts.css";

class PurchasedProducts extends Component {
  state = {
    purchased: null,
  };

  getPurchasedItems = () => {
    const { id } = this.props.user;

    const url = `http://localhost:5000/api/customers/${id}/purchased`;
    axios
      .get(url)
      .then(({ data }) => this.setState({ purchased: data }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getPurchasedItems();
  }

  render() {
    return (
      <div className="purchased-products">
        <div className="purchased-products--head">
          <span>PRODUCT</span>
          <span>PRICE</span>
          <span>QUANTITY</span>
          <span>TOTAL</span>
        </div>
        <ul className="purchased-products-list">
          {this.state.purchased &&
            this.state.purchased.map((item, ind) => (
              <PurchasedItem key={`${item.id}:${ind}`} item={item} />
            ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
});

export default connect(mapStateToProps)(PurchasedProducts);
