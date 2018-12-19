import React, { Component } from "react";
import "./Customer.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class CustomerDetails extends Component {
  render() {
    return (
      <div>
        <div className="user-details">
          <a href="#" className="arrow left" />
          <button className="user-btn" >Edit User</button>
          <div className="user-img" />
          <div className="user-name">UserName</div>
          <div className="user-info">
            <div className="user-personal-info">
              <p className="user-p">Email</p>
              <span>example@gmail.com</span>
            </div>
            <div className="user-personal-info">
              <p className="user-p">Birth Date</p>
              <span>02/03/2000</span>
            </div>
            <div className="user-personal-info">
              <p className="user-p">FullName</p>
              <span>Name Surname</span>
            </div>
          </div>
          <div className="user-balance">
            <p className="user-p ballance">Ballance</p>
            <span className="ballance-span">1230$</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerDetails;
// import React, { Component } from "react";
// import {
//   Grid,
//   Cell,
//   List,
//   ListItem,
//   ListItemContent,
//   FABButton,
//   Icon,
//   Button
// } from "react-mdl";

// class CustomerDetails extends Component {
//   render() {
//     return (
//       <div className="contact-body">

//         <Button accent>Button</Button>
//       </div>
//     );
//   }
// }

// export default CustomerDetails;
