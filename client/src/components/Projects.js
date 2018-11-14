import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
require("dotenv").config();
//import "../css/content.scss";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null
    };
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/api`
    });
  }

  componentDidMount = () => {
    this.props.newPage();
  };

  render() {
    return (
      <section className="all-projects">
       <p>My projects</p>
      </section>
    );
  }
}