import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ prod, index, matchedUrl }) => {
  return (
    <div className="prod-card">
      <div className="prod-img-wrapper">
        <img
          className="prod-img"
          src={`https://source.unsplash.com/user/joelvalve/250x25${index}`}
        />
        <button className="prod-detail-btn" type="button">
          <Link className="prod-detail-link" to={`${matchedUrl}/${prod.id}`}>
            Details
          </Link>
        </button>
      </div>
      <div className="prod-details">
        <div className="prod-detail prod-title">{prod.name}</div>
        <div className="prod-detail prod-brand-size">
          <span className="prod-brand">{prod.brand}</span>
          <span className="prod-size">{prod.size}</span>
        </div>
        <div className="prod-detail prod-price">${prod.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
