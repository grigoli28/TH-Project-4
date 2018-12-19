import React from "react";

import Navigation from "../navigation/Navigation";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import Footer from "../footer/Footer";
import ProductDetails from "../productDetails/ProductDetails";

export default function ProductDetailsPage() {
  return (
    <div className="container">
      <Navigation />
      <ShoppingCart />
      <ProductDetails />
      <Footer />
    </div>
  );
}
