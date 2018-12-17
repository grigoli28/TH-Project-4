import React from "react";
import ProductCategory from "./ProductCategory";

export default function WomenCategory({ match }) {
  return <ProductCategory gender="women" match={match} />;
}
