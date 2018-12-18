import "./ProductDetails.css";
import {Link} from "react-router-dom";
import Shirt from "./t-shirt.jpg"
import React, { Component } from 'react'


export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name : "Premium t-shirt",
      id: "e11a85f0-fd46-11e8-8fd8-897319b1388b",
      name: "Premium t-shirt",
      price: 1000,
      size: "XL",


    }
  }
 render() {
   return (
     <div>
     <li className="weird-nav"> <Link to="">Main / Men / T-Shirts</Link></li>

<img className="Detailimg" src={Shirt} alt="t-shirt"/>

<div className="Detailrewiew">
    <h2>{this.state.name}</h2>

    <br/>

    <h3>{this.state.price}$</h3>

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

 <button className="Purchasebut" 
  onClick = { ()=> alert(`added to cart: ${this.state.name}, ${this.state.price}$, ${this.state.size}`)
 }
 >Add To Cart</button>

</div>
<hr />

     </div>
   );
 }
}
