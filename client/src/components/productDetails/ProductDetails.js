import React from 'react';
import "./ProductDetails.css";
import {BrowserRouter,Link} from "react-router-dom";
import Shirt from "./t-shirt.jpg"
export default function Product() {
  return (
    <BrowserRouter>
    <div>
    <ul className="main-nav">
        <li><Link to="">Man</Link></li>
        <li><Link to="">Woman</Link></li>
        <li><Link to="">Contact</Link></li>
        <li><Link to="">About Us</Link></li>
        <li></li>
        <li><Link to=""><i className="fas fa-search"></i></Link></li>
        <li><Link to=""><i className="far fa-user"></i></Link></li>
        <li><Link to=""><i className="fas fa-shopping-cart"></i></Link></li>
      </ul>
      <hr/>
      <li className="weird-nav"> <Link to="">Main / Men / T-Shirts</Link></li>

      <img src={Shirt} alt="t-shirt"/>
      
      <div className="rewiew">
           <h2>T-Shirt:Blue</h2>
           <h3>80$</h3>
          
        <ul className="size">
            <li><Link to="">S</Link></li>
            <li><Link to="">M</Link></li>
            <li><Link to="">L</Link></li>
            <li><Link to="">XL</Link></li>
        </ul>
          
        <p>
        some bullshit about how great this shirt is
        some bullshit about how great this shirt is again
        some bullshit about how great this shirt is again
        some bullshit about how great this shirt is again 
        </p>

        <button>Add Card</button>
          
      </div>
      <hr />



    
      
    </div>
    </BrowserRouter>
  );
}
