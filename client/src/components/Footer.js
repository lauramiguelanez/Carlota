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
            <Link className="nav-link" to="/research">Research</Link>
            <Link className="nav-link" to="/curating">Curating</Link>
            <Link className="nav-link" to="/translation">Translation</Link>
        </div>
      </nav>
    );
  }
}
