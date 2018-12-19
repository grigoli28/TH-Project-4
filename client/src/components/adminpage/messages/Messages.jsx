import React, { Component } from "react";
import axios from "axios";

import Table from "../../table/Table";

export default class Messages extends Component {
  state = {
    messages: null,
  };

  updateMessages = () => {
    const url = "/api/admin/messages";
    axios
      .get(url)
      .then(({ data }) => this.setState({ messages: data }))
      .catch(err => console.log(err));
  };

  removeMessage = id => {
    const url = `/api/admin/messages/${id}`;
    axios
      .delete(url)
      .then(res => {
        alert("Message Removed");
        this.updateMessages();
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.updateMessages();
  }

  render() {
    return (
      <Table
        items={this.state.messages}
        tHeads={["email", "date"]}
        remove={this.removeMessage}
        match={this.props.match}
      />
    );
  }
}
