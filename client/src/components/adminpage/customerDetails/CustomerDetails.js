import React from "react";
import "./Customer.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default class CustomerDetails extends React.Component {
  state = {
    user: null,
  };
  componentDidMount() {
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
  }
  render() {
    // let { User } = this.state.user;
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
          <span className="ballance-span">{this.state.user && this.state.user.balance}</span>
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
            <li className="user-cart-list">
              {/* High quality Jacket, $2000, M, Nike */}
              {this.state.user && this.state.user.cart}
            </li>
            {/* <li className="user-cart-list">Premium t-shirt, $1000, XL, Nike</li> */}
          </ul>
        </div>
        <br />
      </div>
    );
  }
}