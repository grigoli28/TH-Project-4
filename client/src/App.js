import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/navigation/Navigation.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
      </div>
    );
  }
}

export default App;
