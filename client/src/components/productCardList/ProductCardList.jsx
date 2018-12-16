import React from "react";
import "./ProductCardList.css";

const prodCard = (prod, index) => (
  <div className="prod-card" key={prod.id}>
    <img src={`https://source.unsplash.com/user/joelvalve/300x30${index}`} />
    <h2>{prod.name}</h2>
    <p>{prod.price}</p>
    <p>{prod.gender}</p>
    <p>{prod.category}</p>
    <p>{prod.size}</p>
    <p>{prod.brand}</p>
  </div>
);

export default function ProductCardList({ gender, products }) {
  const menProducts =
    products && products.filter(prod => prod.gender === gender);

  return (
    <div className="product-list">
      {menProducts ? (
        menProducts.length > 0 ? (
          menProducts.map((prod, index) => prodCard(prod, index))
        ) : (
          <h1>Nothing Found!</h1>
        )
      ) : (
        <h1>Loading Products...</h1>
      )}
    </div>
  );
}
