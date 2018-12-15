import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Filters from "./components/filters/Filters";
import Login from "./components/login/Login";
import Contact from "./components/contact/Contact";
import ProductCategory from './components/productCategory/ProductCategory'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Route exact path="/men" component={ProductCategory} />
          <Route exact path="/women" component={Filters} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
