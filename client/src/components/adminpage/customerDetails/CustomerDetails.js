import React from "react";
import "./Customer.css";
import { Link } from "react-router-dom";

function CustomerDetails({ customer, match }) {
  const gobackUrl = match.url
    .split("/")
    .slice(0, -1)
    .join("/");

  return (
    <div className="user-details">
      <Link to={gobackUrl} className="arrow left" />
      <button className="user-btn">Edit User</button>
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
  );
}

export default CustomerDetails;
