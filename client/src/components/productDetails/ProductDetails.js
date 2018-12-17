import "./ProductDetails.css";
import {Link} from "react-router-dom";
import Shirt from "./t-shirt.jpg"
import React, { Component } from 'react'

export default class ProductDetails extends Component {
 render() {
   return (
     <div>
     <li className="weird-nav"> <Link to="">Main / Men / T-Shirts</Link></li>

<img className="Detailimg" src={Shirt} alt="t-shirt"/>

<div className="Detailrewiew">
    <h2>T-Shirt:Blue</h2>

    <br/>

    <h3>80$</h3>

    <br/>

 <div className="Detailsize">
     <button className="Sizebut">S</button>
     <button className="Sizebut">M</button>
     <button className="Sizebut">L</button>
     <button className="Sizebut">XL</button>
 </div>

   <br/>

 <p>
 some bullshit about how great this shirt is
 some bullshit about how great this shirt is again
 some bullshit about how great this shirt is again
 some bullshit about how great this shirt is again
 </p>

 <button className="Purchasebut">Add To Cart</button>

</div>
<hr />

     </div>
   );
 }
}
