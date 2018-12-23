import React from "react";
import "./Customer.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default class CustomerDetails extends React.Component {
  state = {
    user: null
  };

  getCurrentUser = () => {
    const currentUser = this.props.match.params.prodId;
    const url = `http://localhost:5000/api/customers/${currentUser}`;
    axios
      .get(url)
      .then(({ data }) => {
        this.setState({
          user: data
        });
      })
      .catch(err => console.log(err));
  };

  getUserCart = () => {
    const currentUser = this.props.match.params.prodId;
    const url = `http://localhost:5000/api/customers/${currentUser}/cart`;
    axios
      .get(url)
      .then(({ data }) => {
        this.setState({
          cart: data
        });
      })
      .catch(err => console.log(err));
  };
  getUserPurchasedProduct = () => {
    const currentUser = this.props.match.params.prodId;
    const url = `http://localhost:5000/api/customers/${currentUser}/purchased`;
    axios
      .get(url)
      .then(({ data }) => {
        this.setState({
          purchased: data
        });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getCurrentUser();
    this.getUserCart();
    this.getUserPurchasedProduct();
  }

  render() {
    return (
      <div className="user-details">
        <Link to="../customers" className="arrow left" />
        <button className="user-btn" type="submit">
          Edit User
        </button>
        <div className="user-img" />
        <div className="user-name">UserName</div>
        <div className="usergroup userform">
          <input
            type="text"
            required
            className="userinput"
            value={this.state.user && this.state.user.username}
          />
          <span className="userhighlight" />

          <span className="userbar" />
          {/* <label className="userlabel">Email</label> */}
        </div>
        <div className="user-info">
          <div className="user-personal-info">
            <p className="user-p">Email</p>

            <form>
              <div className="usergroup">
                <input
                  type="text"
                  required
                  className="userinput"
                  defaultValue={this.state.user && this.state.user.email}
                />

                <span className="userhighlight" />
                <span className="userbar" />
                {/* <label className="userlabel">Email</label> */}
              </div>
            </form>
          </div>

          <div className="user-personal-info">
            <p className="user-p">Birth Date</p>
            <form>
              <div className="usergroup">
                <input
                  type="text"
                  required
                  className="userinput"
                  defaultValue={this.state.user && this.state.user.birthdate}
                />
                <span className="userhighlight" />
                <span className="userbar" />
                {/* <label className="userlabel">Email</label> */}
              </div>
            </form>
          </div>
          <div className="user-personal-info">
            <p className="user-p">FullName</p>
            <form>
              <div className="usergroup">
                <input
                  type="text"
                  required
                  className="userinput"
                  defaultValue={this.state.user && this.state.user.name}
                />

                <span className="userhighlight" />
                <span className="userbar" />
                {/* <label className="userlabel">Email</label> */}
              </div>
            </form>
          </div>
        </div>
        <div className="user-balance">
          <p className="ballance">Ballance</p>
          <span className="ballance-span">
            {this.state.user && this.state.user.balance}
          </span>
        </div>
        <div className="user-details-cart">
          <ul className="user-productlist">
            <li className="purchased-list">Purchased Products</li>
            {this.state.purchased &&
              this.state.purchased.map(prod => (
                <p className="cart-list">
                  {prod.name}, ${prod.price},{prod.brand},{prod.category},
                  {prod.size}
                </p>
              ))}
          </ul>
          <ul className="user-cart">
            <li className="user-cart-list">Users Cart</li>
            <li className="user-cart-lists">
              {this.state.cart &&
                this.state.cart.map(prod => (
                  <p className="cart-list">
                    {prod.name}, ${prod.price},{prod.brand},{prod.category},
                    {prod.size}
                  </p>
                ))}
            </li>
          </ul>
        </div>
        <br />
      </div>
    );
  }
}
