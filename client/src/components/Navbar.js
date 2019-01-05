import React, { Component } from "react";
import { Link, BrowserRouter, NavLink } from "react-router-dom";
import "../css/navbar.scss";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
  }

  render() {
    return (
      <nav className="nav-style" id="top-nav" role="navigation">
        <div className="nav-width">
          <BrowserRouter>
            <h2>
              {/* <NavLink className="nav-link" to="/about">About</NavLink>
    <NavLink className="nav-link" to="/">Carlota Mir</NavLink> */}
              <a className="nav-link" href="mailto:mir.carlota@gmail.com">Carlota Mir</a>
            </h2>
            {/* <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>Carlota</NavLink></li> */}
          </BrowserRouter>
        </div>
      </nav>
    );
  }
}
