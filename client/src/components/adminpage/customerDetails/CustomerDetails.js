import React from "react";
import "./Customer.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default class CustomerDetails extends React.Component {
  state = {
    user: null,
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;

    this.setState(({ user }) => ({
      user: {
        ...user,
        [name]: value,
      },
    }));
  };

  updateUser = () => {
    const currentUser = this.props.match.params.prodId;
    const url = `http://localhost:5000/api/customers/${currentUser}`;

    const { name, email, username, birthdate } = this.state.user;

    axios
      .put(url, { name, email, username, birthdate })
      .then(({ data }) => console.log(data))
      .catch(err => console.log(err));
  };

  getCurrentUser = () => {
    const currentUser = this.props.match.params.prodId;
    const url = `http://localhost:5000/api/customers/${currentUser}`;
    axios
      .get(url)
      .then(({ data }) => {
        this.setState({
          user: data,
        });
      })
      .catch(err => console.log(err));

    // Get user's cart
    const userCartUrl = `${url}/cart`;
    axios
      .get(userCartUrl)
      .then(({ data }) => {
        this.setState({
          cart: data,
        });
      })
      .catch(err => console.log(err));

    // Get purchased products
    const purchasedUrl = `${url}/purchased`;
    axios
      .get(purchasedUrl)
      .then(({ data }) => {
        this.setState({
          purchased: data,
        });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getCurrentUser();
  }

  render() {
    return (
      <div className="user-details">
        <Link to="../customers" className="arrow left" />
        <button onClick={this.updateUser} className="user-btn" type="button">
          Update User
        </button>
        <div className="user-img" />
        <div className="user-name">Name</div>
        <div className="usergroup userform">
          <input
            name="name"
            type="text"
            className="userinput"
            onChange={this.onInputChange}
            value={this.state.user ? this.state.user.name : ""}
          />
          <span className="userhighlight" />

          <span className="userbar" />
        </div>
        <div className="user-info">
          <div className="user-personal-info">
            <p className="user-p">Email</p>

            <form>
              <div className="usergroup">
                <input
                  name="email"
                  type="text"
                  className="userinput"
                  onChange={this.onInputChange}
                  value={this.state.user ? this.state.user.email : ""}
                />

                <span className="userhighlight" />
                <span className="userbar" />
              </div>
            </form>
          </div>

          <div className="user-personal-info">
            <p className="user-p">Birthdate</p>
            <form>
              <div className="usergroup">
                <input
                  name="birthdate"
                  type="date"
                  className="userinput"
                  onChange={this.onInputChange}
                  value={this.state.user ? this.state.user.birthdate : ""}
                />
                <span className="userhighlight" />
                <span className="userbar" />
              </div>
            </form>
          </div>
          <div className="user-personal-info">
            <p className="user-p">Username</p>
            <form>
              <div className="usergroup">
                <input
                  name="username"
                  type="text"
                  className="userinput"
                  onChange={this.onInputChange}
                  value={this.state.user ? this.state.user.username : ""}
                />

                <span className="userhighlight" />
                <span className="userbar" />
              </div>
            </form>
          </div>
        </div>
        <div className="user-balance">
          <p className="ballance">Balance</p>
          <span className="ballance-span">
            {this.state.user && this.state.user.balance}
          </span>
        </div>
        <div className="user-details-cart">
          <ul className="user-productlist">
            <li className="purchased-list">Purchased Products</li>
            {this.state.purchased &&
              this.state.purchased.map(prod => (
                <p key={prod.id} className="cart-list">
                  {prod.name}, ${prod.price},{prod.brand},{prod.category},
                  {prod.size}
                </p>
              ))}
          </ul>
          <ul className="user-cart">
            <li className="user-cart-list">Shopping Cart</li>
            <li className="user-cart-lists">
              {this.state.cart &&
                this.state.cart.map(prod => (
                  <p key={prod.id} className="cart-list">
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
