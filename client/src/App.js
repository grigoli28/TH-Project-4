import React, { Component } from "react";
import "./App.css";
// import Navigation from "./components/navigation/Navigation.js"
import ProductNav from "./components/productCard/Product.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navigation/> */}
        <ProductNav/>
      </div>
    );
  }
}

export default App;
