import React, { Component } from "react";
import { Link, BrowserRouter, NavLink } from "react-router-dom";
import "../css/navbar.scss";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
  }

  render() {
    return (
      <nav className="nav-style" id="botom-nav" role="navigation">
        <div className="nav-width">
          <BrowserRouter>
            <h2 className="nav-link">
              {/* <NavLink to="/about">Carlota Mir</NavLink> */}
              <a href="mailto:mir.carlota@gmail.com">email</a>
              <a href="https://www.instagram.com/carlotamir/">instagram</a>
            </h2>
          </BrowserRouter>
        </div>
      </nav>
    );
  }
}
