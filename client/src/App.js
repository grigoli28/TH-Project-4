import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Login from "./components/login/Login";
import Contact from "./components/contact/Contact";
<<<<<<< HEAD
import PictureModel from './components/pictureModel/PictureModel'
=======
import ProductCategory from "./components/productCategory/ProductCategory";
import Footer from "./components/footer/Footer";

const MenCategory = () => <ProductCategory gender="men" />;

const WomenCategory = () => <ProductCategory gender="women" />;
>>>>>>> 6112e4821aa6f4a13c57d5097735dcb6c5aac763

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
          <Footer />
<<<<<<< HEAD
          <ProductList />
          <PictureModel/>
=======
>>>>>>> 6112e4821aa6f4a13c57d5097735dcb6c5aac763
        </div>
      </Router>
    );
  }
}

export default App;
