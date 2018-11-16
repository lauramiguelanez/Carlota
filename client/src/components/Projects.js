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
    let projects;
    return this.service
      .get("/project")
      .then(projs => {
        projects = projs.data;
        console.log(projects);
        this.setState({ projectArr: projects });
      })
      .catch(error => console.log(error));

  }

  render() {
    let projects  = this.state.projectArr;


    if (projects) {
      projects.forEach(e => {});
      return (
        <section className="all-projects">
          {projects.map(project => {
            return (
              <div key={project._id} className="scope-in-feed">
                <Link to={`/project/${project._id}`}>
                  <img
                    className="panorama-feed"
                    width="200px"
                    src={project.coverImage}
                  />
                </Link>
              </div>
            );
          })}
        </section>
      );
    } else {
      return (
        <section className="profile-feed">
        </section>
      );
    }




  }
}