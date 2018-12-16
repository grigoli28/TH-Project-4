import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Filters from "./components/filters/Filters";
import SortBy from "./components/sortBy/SortBy";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import Footer from "./components/footer/Footer";
import Checkout from "./components/checkout/CheckoutCart";
import ProductList from "./components/productList/ProductList";
import Login from "./components/login/Login";
import Contact from "./components/contact/Contact";
import PictureModel from './components/pictureModel/PictureModel'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Route exact path="/men" component={Filters} />
          <Route exact path="/women" component={Filters} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/contact" component={Contact} />

          {/* <SortBy /> */}
          {/* <Filters /> */}
          {/* <ShoppingCart /> */}
          {/* <Checkout /> */}
          <Footer />
          <ProductList />
          <PictureModel/>
        </div>
      </Router>
    );
  }
}

export default App;
