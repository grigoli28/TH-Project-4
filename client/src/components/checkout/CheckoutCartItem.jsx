import React from "react";
import { Link } from "react-router-dom";

class CheckoutCartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true,
      prise: 19,
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  };
  ResultMinus = () => {
    this.setState({ prise: this.state.prise - 19 });
  };
  ResultAdd = () => {
    this.setState({ prise: this.state.prise + 19 });
  };

  render() {
    return (
      <li className="checkout__cart--item">
        <span
          onClick={() => this.props.remove(this.props.item.id)}
          className="checkout__cart--img lnr lnr-cross"
        >
          <img src="" alt="" />
        </span>
        <Link
          to={`/${this.props.item.gender}/${this.props.item.id}`}
          className="checkout__cart--title"
        >
          {this.props.item.name}
        </Link>

        <div className="checkout__cart--price">${this.props.item.price}</div>
        <div className="checkout__cart--quantity">
          <button
            className="quantity-btn"
            onClick={this.DecreaseItem && this.ResultMinus}
          >
            <i className="fas fa-minus" />
          </button>
          {this.state.show ? (
            <h4 className="checkout__cart--amount">{this.state.clicks}</h4>
          ) : (
            ""
          )}

          <button
            className="quantity-btn"
            onClick={this.IncrementItem && this.ResultAdd}
          >
            <i className="fas fa-plus" />
          </button>
        </div>
        <div className="checkout__cart--price-total">${this.state.prise}</div>
      </li>
    );
  }
}
export default CheckoutCartItem;
