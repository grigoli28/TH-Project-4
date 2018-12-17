import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import store from "./store";
import { setCurrentUser, updateCart } from "./actions/authActions";
import axios from "axios";

import "./App.css";
import Navigation from "./components/navigation/Navigation";
import Login from "./components/login/Login";
import Contact from "./components/contact/Contact";
import MenCategory from "./components/productCategory/MenCategory";
import WomenCategory from "./components/productCategory/WomenCategory";
import Footer from "./components/footer/Footer";
import Home from "./components/homepage/Home";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";

if (localStorage._auth_user_) {
  const user = JSON.parse(localStorage._auth_user_);

  store.dispatch(setCurrentUser(user));

  const { id } = user;
  const url = `http://localhost:5000/api/customers/${id}/cart`;

  axios
    .get(url)
    .then(({ data }) => {
      store.dispatch(updateCart(data));
    })
    .catch(err => console.log(err));
}

class App extends Component {
  state = {
    cartIsVisible: false,
  };

  toggleCart = () => {
    this.setState(({ cartIsVisible }) => ({ cartIsVisible: !cartIsVisible }));
  };

  render() {
    return (
      <div className="App">
        <Router>
          <div className="container">
            <Navigation toggleCart={this.toggleCart} />
            <ShoppingCart
              toggleCart={this.toggleCart}
              visible={this.state.cartIsVisible}
            />
            <Route exact path="/" component={Home} />
            <Route exact path="/men" component={MenCategory} />
            <Route exact path="/women" component={WomenCategory} />
            <Route
              exact
              path="/login"
              render={() =>
                this.props.isLogged ? <Redirect to="/" /> : <Login />
              }
            />
            <Route exact path="/contact" component={Contact} />
            <Route
              path="/men/:prodId"
              render={({ match }) => <h1>{match.params.prodId}</h1>}
            />
            <Route
              path="/women/:prodId"
              render={({ match }) => <h1>{match.params.prodId}</h1>}
            />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  isLogged: auth.isAuthenticated,
  user: auth.user,
});

export default connect(mapStateToProps)(App);
