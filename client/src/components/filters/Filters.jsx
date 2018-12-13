import React, { Component } from "react";
import "./Filters.css";
import RadioFilter from "./RadioFilter";
import ChkboxFilter from "./ChkboxFilter";
import PriceFilter from "./PriceFilter";

export default class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "T-shirts",
      size: "S",
      brands: [],
      price: { min: "", max: "" },
    };
  }

  onRadioInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  // For filtering with brands
  onCheckboxInput = e => {
    const { value, checked } = e.target;
    this.setState(prevState => {
      // If user checked brand, push it into array
      if (checked) {
        return {
          brands: [...prevState.brands, value],
        };
      }

      // Else means user unchecked brand and remove it from array
      const filteredBrands = prevState.brands.filter(brand => brand !== value);
      return {
        brands: filteredBrands,
      };
    });
  };

  onPriceInput = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      price: {
        ...prevState.price,
        [name]: value,
      },
    }));
  };

  render() {
    return (
      <div className="filters">
        <RadioFilter
          filterName="Category"
          currentValue={this.state.category}
          onChange={this.onRadioInput}
          categories={["T-shirts", "Sweaters", "Pants", "Shorts"]}
        />

        <RadioFilter
          filterName="Size"
          currentValue={this.state.size}
          onChange={this.onRadioInput}
          categories={["S", "M", "L", "XL"]}
        />

        <ChkboxFilter
          filterName="Brands"
          currentValues={this.state.brands}
          onChange={this.onCheckboxInput}
          brands={["Nike", "Adidas", "Armani", "Dolce"]}
        />

        <PriceFilter
          filterName="Price"
          currentValue={this.state.price}
          onChange={this.onPriceInput}
        />
      </div>
    );
  }
}
