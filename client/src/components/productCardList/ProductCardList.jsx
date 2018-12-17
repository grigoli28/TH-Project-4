import React from "react";
import "./ProductCardList.css";
import { Link, Route } from "react-router-dom";

const prodCard = (prod, index, matchedUrl) => (
  <div className="prod-card" key={prod.id}>
    <img src={`https://source.unsplash.com/user/joelvalve/300x30${index}`} />
    <h2>{prod.name}</h2>
    <p>{prod.price}</p>
    <p>{prod.gender}</p>
    <p>{prod.category}</p>
    <p>{prod.size}</p>
    <p>{prod.brand}</p>
    <Link to={`${matchedUrl}/${prod.id}`}>Details</Link>
  </div>
);

export default function ProductCardList({ gender, products, match }) {
  const filteredProducts =
    products && products.filter(prod => prod.gender === gender);
  return (
    <div className="product-list">
      {filteredProducts ? (
        filteredProducts.length > 0 ? (
          filteredProducts.map((prod, index) =>
            prodCard(prod, index, match.url)
          )
        ) : (
          <h1>Nothing Found!</h1>
        )
      ) : (
        <h1>Loading Products...</h1>
      )}
    </div>
  );
}
