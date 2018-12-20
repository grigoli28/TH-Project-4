import React from "react";
import "./Customer.css";
import { Link } from "react-router-dom";

export default class CustomerDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      User: [],
    };
  }
  componentDidMount() {
    fetch("/api/Customers")
      .then(res => res.json())
      .then(json => {
        this.setState({
          User: json
        });
      });
  }
  render() {
    let { User } = this.state;
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
                {User.map(User => (
                  <input
                    key={User.id}
                    type="text"
                    required
                    className="userinput"
                    defaultValue={User.email}
                  />
                ))}

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
              {User.map(User => (
                  <input
                    key={User.id}
                    type="text"
                    required
                    className="userinput"
                    defaultValue={User.birthdate}
                  />
                ))}
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
              {User.map(User => (
                  <input
                    key={User.id}
                    type="text"
                    required
                    className="userinput"
                    defaultValue={User.name}
                  />
                ))}
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
            <li className="user-cart-list">
              High quality Jacket, $2000, M, Nike
            </li>
            <li className="user-cart-list">Premium t-shirt, $1000, XL, Nike</li>
          </ul>
        </div>
        <br />
      </div>
    );
  }
}
