import React, { Component } from "react";
import SortBy from "../sortBy/SortBy";
import "./ProductCategory.css";
import Filters from "../filters/Filters";
import ProductCardList from "../productCardList/ProductCardList";

export default class ProductCategory extends Component {
  render() {
    return (
      <>
        <SortBy gender="Men" />
        <div className="men-products">
          <Filters />
          <ProductCardList gender="men" />
        </div>
      </>
    );
  }
}
