import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
require("dotenv").config();
//import "../css/project.scss";

export default class ProjectDetail extends Component {
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
      let {title, date, location, category, tags, description, role, coverImage, images};
    return (
      <section className="all-projects">
       <p>My projects</p>
      </section>
    );
  }
}



/*     title: Title,
    date: String,
    location: String,
    category: {
      type: String,
      enum : ['RESEARCH', 'CURATING', 'TRASLATION'],
      default : 'RESEARCH'
    },
    tags: [],
    description: String,
    role: {
      type: String,
      enum : ['INDIVIDUAL', 'COLABORATION'],
      default : 'INDIVIDUAL'
    },
  */