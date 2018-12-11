import React from "react";
import "./Nav.css";


export default function Size() {
  return (
      <div>
          <p className="category">Size</p>
          <form className="sidebar-form">
             <input type="checkbox" name="S" value="SIZE" /> <span>S</span>
             <input type="checkbox" name="M" value="SIZE" /> <span>M</span>
             <input type="checkbox" name="L" value="SIZE" /> <span>L</span>
             <input type="checkbox" name="XL" value="SIZE" /> <span>XL</span>
          </form>

      </div>
  );
}
