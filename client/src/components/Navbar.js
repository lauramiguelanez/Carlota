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
            <h2 className="nav-link">
              <NavLink to="/about">Carlota Mir</NavLink>
            </h2>
            {/* <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>Carlota</NavLink></li> */}
          </BrowserRouter>
        </div>
      </nav>
    );
  }
}
