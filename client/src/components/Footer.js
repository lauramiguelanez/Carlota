import React, { Component } from 'react';
import { Link, BrowserRouter, NavLink } from 'react-router-dom';
import '../css/navbar.scss';

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
          <NavLink className="nav-link" to="/research">
            Research
          </NavLink>
          <NavLink className="nav-link" to="/curating">
            Curating
          </NavLink>
          <NavLink className="nav-link" to="/translation">
            Translation
          </NavLink>
          {/* <h2 className="nav-link">Site under construction</h2> */}
        </div>
      </nav>
    );
  }
}
