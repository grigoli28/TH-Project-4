import React from "react";

export default function CategoryFilter() {
  return (
    <div>
      <p className="category">Category</p>
      <form className="sidebar-form">
        <input type="checkbox" name="Tshirts" value="CATEGORY" />{" "}
        <span>Tshirts</span>
        <input type="checkbox" name="Hoody" value="CATEGORY" />{" "}
        <span> Hoody</span>
        <input type="checkbox" name="Jacket" value="CATEGORY" />{" "}
        <span> Jacket</span>
        <input type="checkbox" name="accessories" value="CATEGORY" />{" "}
        <span> Accessories</span>
      </form>
    </div>
  );
}
