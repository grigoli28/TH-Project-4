import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Filters from "./components/filters/Filters";
import SortBy from "./components/sortBy/SortBy";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
        </Router>
        <SortBy />
        <Filters />
      </div>
    );
  }
}

export default App;
