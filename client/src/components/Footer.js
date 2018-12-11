import React, { Component } from "react";
import { Link, BrowserRouter, NavLink } from "react-router-dom";
import "../css/navbar.scss";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
  }

  sendCategory = category => {
    this.props.newFilter(category);
  };

  render() {
    return (
      <nav className="nav-style" id="botom-nav" role="navigation">
        <div className="nav-width">
          
            <button onClick={e => this.sendCategory("RESEARCH")}>Research</button>
            <button onClick={e => this.sendCategory("CURATING")}>Curating</button>
            <button onClick={e => this.sendCategory("TRASLATION")}>Translate</button>
        </div>
      </nav>
    );
  }
}
