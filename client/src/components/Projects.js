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
    this.getProjects();
  }

  componentDidMount = () => {
    this.props.newPage();
  }

  getProjects = () => {
    return this.service
      .get("/project")
      .then(projects => {
        console.log(projects);
        //console.log(proj.data);
      })
      .catch(error => console.log(error));

  }

  render() {
    return (
      <section className="all-projects">
       <p>My projects</p>
      </section>
    );
  }
}