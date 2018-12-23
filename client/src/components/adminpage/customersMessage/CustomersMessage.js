import React from "react";
import "./CustomerMSG.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default class CustomerMessages extends React.Component {
  state = {
    user: null
  };
  componentDidMount() {
    const currentUser = this.props.match.params.prodId;
    const url = `http://localhost:5000/api/admin/messages/${currentUser}`;
    axios
      .get(url)
      .then(({ data }) => {
        this.setState({
          user: data
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    // let { User } = this.state.user;
    return (
      <div className="res-messages">
        <Link to="../messages" className="arrow left" />
        <div className="user-img" />
        <div className="user-name">
          <p className="usermsg">{this.state.user && this.state.user.email}</p>
        </div>

        <p className="user-message" >{this.state.user && this.state.user.message}</p>
      </div>
    );
  }
}
