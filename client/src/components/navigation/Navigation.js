import React from "react";
import "./Navigation";
import {Link} from "react-router-dom";


export default function Navigation() {
  return (
    <div className="main-nav">
      <ul>
        <li><Link>Man</Link></li>
        <li><Link>Woman</Link></li>
        <li><Link>Contact</Link></li>
        <li><Link>About Us</Link></li>
        <li><Link>search</Link></li>
        <li><Link>Login</Link></li>
        <li><Link>Cart</Link></li>
      </ul>
     
    </div>
  );
}
