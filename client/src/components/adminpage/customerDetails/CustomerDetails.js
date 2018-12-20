import React from "react";
import "./Customer.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default class CustomerDetails extends React.Component {
  state = {
    email: "ex@gmail.com",
    date: "02.4.1999",
    FullName: "so laop"
  };

  updateCustomers = () => {
    const url = "/api/customers";
    axios
      .get(url)
      .then(({ data }) => this.setState({ customers: data }))
      .catch(err => console.log(err));
  };
  componentDidMount() {
    this.updateCustomers();
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
        <form className="usernameform">
          <div className="usergroup userform">
            <input
              type="text"
              required
              className="userinput"
              defaultValue={this.state.customers}
            />
            <span className="userhighlight" />
            <span className="userbar" />
            {/* <label className="userlabel">Email</label> */}
          </div>
        </form>
        <div className="user-info">
          <div className="user-personal-info">
            <p className="user-p">Email</p>
            <form>
              <div className="usergroup">
                <input
                  type="text"
                  required
                  className="userinput"
                  defaultValue={this.state.email}
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
                  defaultValue={this.state.date}
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
                  defaultValue={this.state.FullName}
                />
                <span className="userhighlight" />
                <span className="userbar" />
                {/* <label className="userlabel">Email</label> */}
              </div>
            </form>
          </div>
        </div>
        <div className="user-balance">
          <p className="user-p ballance">Ballance</p>
          <span className="ballance-span">1230$</span>
        </div>
        <div className="user-details-cart">
          <ul className="user-productlist">
            <li className="purchased-list">Purchased Products</li>
            <li className="purchased-list">
              Premium t-shirt, $1000, XL, Adidas
            </li>
            <li className="purchased-list">Leather pants, $4000, S, Nike</li>
            <li className="purchased-list">Shorts, 3000, XL, Dolce</li>
          </ul>
          <ul className="user-cart">
            <li className="user-cart-list">Users Cart</li>
            <li className="user-cart-list">High quality Jacket, $2000, M, Nike</li>
            <li className="user-cart-list">Premium t-shirt, $1000, XL, Nike</li>
          </ul>
        </div>
        <br />
      </div>
    );
  }
}
