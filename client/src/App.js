import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Filters from "./components/filters/Filters";
import SortBy from "./components/sortBy/SortBy";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import Footer from "./components/footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
        </Router>
        <SortBy />
        <Filters />
        <ShoppingCart />
        <Footer />
      </div>
    );
  }
}

export default App;
