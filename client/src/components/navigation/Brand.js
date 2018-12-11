import React from "react";
import "./Nav.css";


export default function Brand() {
  return (
      <div>
          <p className="category">Brand</p>
          <form className="sidebar-form">
             <input type="checkbox" name="S" value="Brand" /> <span>YSL</span>
             <input type="checkbox" name="M" value="Brand" /> <span>Gucci</span>
             <input type="checkbox" name="L" value="Brand" /> <span>Polo</span>
             <input type="checkbox" name="XL" value="Brand" /> <span>Nike</span>
          </form>

      </div>
  );
}
