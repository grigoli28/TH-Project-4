import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const { Consumer } = Context;

export default class Provider extends Component {
  state = {
    user: null,
    errors: null,
    isLogged: false,
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export { Context, Consumer };
