import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import "../css/navbar.scss";

export default class Navbar extends Component {
    constructor(props) {
      super(props);
      this.state = { loggedInUser: null };
    }
  
    render() {
        return (
            <nav className="nav-style" id="top-nav" role="navigation" aria-label="main navigation">
              <ul className="nav-width">
              <li>Carlota</li>
                {/* <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>Carlota</Link></li> */}
              </ul>
            </nav>
        )
    }
}
  