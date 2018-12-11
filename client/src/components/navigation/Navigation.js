import React from "react";
import "./Nav.css";
import {BrowserRouter,Link} from "react-router-dom";


export default function Navigation() {
  return (
    <BrowserRouter>
    <div >
      <ul className="main-nav">
        <li><Link to="">Man</Link></li>
        <li><Link to="">Woman</Link></li>
        <li><Link to="">Contact</Link></li>
        <li><Link to="">About Us</Link></li>
        <li></li>
        <li><Link to="">search</Link></li>
        <li><Link to="">Login</Link></li>
        <li><Link to="">Cart</Link></li>
      </ul>
      <hr/>
     
    </div>
    </BrowserRouter>
  );
}
