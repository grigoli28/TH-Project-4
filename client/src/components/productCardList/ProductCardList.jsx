import React, { Component } from "react";
import "./ProductCardList.css";
import axios from "axios";

const prodCard = (prod, index) => (
  <div className="prod-card" key={prod.id}>
    <img src={`https://source.unsplash.com/user/joelvalve/300x30${index}`} />
    <h2>{prod.name}</h2>
    <p>{prod.price}</p>
    <p>{prod.gender}</p>
    <p>{prod.category}</p>
    <p>{prod.size}</p>
    <p>{prod.description}</p>
  </div>
);

export default class ProductCardList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: null };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/products")
      .then(({ data }) => this.setState({ products: data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="product-list">
        {this.state.products ? (
          this.state.products.length > 0 ? (
            this.state.products.map((prod, index) => prodCard(prod, index))
          ) : (
            <h1>Nothing Found!</h1>
          )
        ) : (
          <h1>Loading Products...</h1>
        )}
      </div>
    );
  }
}
