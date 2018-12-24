import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <div className="home-nav">
          <p className="home-p">New Collection</p>
          <div>
            <Link to="../men" className="home-btn">
              <p className="link-p">View Collection</p>
            </Link>
          </div>
        </div>
        <div className="home-mid-nav">
          <div className="mid-img-1"><p className="home-img-text">Limmited</p></div>
          <div className="mid-img-2"></div>
          <div className="mid-img-3"><p className="home-img-text">Edition</p></div>
        </div>
        <div className="home-bot-nav">
          <p className="nike">NIKE</p>
          <p className="armani">ARMANI</p>
          <p className="doice">DOICE</p>
          <p className="adidas">  ADIDAS</p>
        </div>
      </div>
    );
  }
}
export default Home;
