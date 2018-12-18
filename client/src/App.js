import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Login from "./components/login/Login";
import Contact from "./components/contact/Contact";
import ProductCategory from "./components/productCategory/ProductCategory";
import Footer from "./components/footer/Footer";
import Admin from "./components/adminpage/AdminPage"
import ProductDetails from "./components/productDetails/ProductDetails"
const MenCategory = () => <ProductCategory gender="men" />;

const WomenCategory = () => <ProductCategory gender="women" />;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Route exact path="/men" component={MenCategory} />
          <Route exact path="/women" component={WomenCategory} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/contact" component={Contact} />
          <ProductDetails/>
          {/* <Admin/> */}
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
