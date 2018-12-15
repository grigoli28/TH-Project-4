import React from "react";

class CheckoutCartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
  

  render(){
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
        <button className="quantity-btn"  onClick={this.DecreaseItem}>
          <i className="fas fa-minus" />
        </button>
        { this.state.show ? <h4 className="checkout__cart--amount">{ this.state.clicks }</h4> : '' }

        <button className="quantity-btn"  onClick={this.IncrementItem}>
          <i className="fas fa-plus" />
        </button>
      </div>
      <div className="checkout__cart--price-total">$19.00</div>
    </li>
  );
  }
}
export default CheckoutCartItem;
