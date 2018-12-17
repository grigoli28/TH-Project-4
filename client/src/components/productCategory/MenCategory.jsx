import React from "react";
import ProductCategory from "./ProductCategory";

export default function MenCategory({ match }) {
  return <ProductCategory gender="men" match={match} />;
}
