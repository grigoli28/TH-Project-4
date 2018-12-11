import React from "react";
import "./Nav.css";
import {BrowserRouter,Link} from "react-router-dom";
import Category from "./Category"
import Size from "./Size"
import Brand from "./Brand"
import VolumeSlider from "./slider"



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
        <li><Link to=""><i class="fas fa-search"></i></Link></li>
        <li><Link to=""><i class="far fa-user"></i></Link></li>
        <li><Link to=""><i class="fas fa-shopping-cart"></i></Link></li>
      </ul>
      <hr/>
      <ul className="mid-nav">
        <li>Men/Women</li>
        <li></li>
        <li>SortBy</li>
        <li>Price</li>
        <li>Name</li>
        <li>Popularity</li>
      </ul>
      <Category/>
      <Size />
      <Brand />
      <p className="prize">Prize</p >
      <VolumeSlider />

     
    </div>
    </BrowserRouter>
  );
}
