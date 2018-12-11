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

  getProject = (id) => {
    return this.service
      .get(`/project/${id}`)
      .then(project => {
        this.setState({ 
          title: project.data.title, 
          subtitle: project.data.subtitle, 
          date: project.data.date, 
          context: project.data.context, 
          category: project.data.category, 
          coverImage: project.data.coverImage, 
          images: project.data.images, 
          tagsTopic: project.data.tagsTopic, 
          tagsFormat: project.data.tagsFormat, 
          description: project.data.description, 
          externalLink: project.data.externalLink, 
          authorship: project.data.authorship
        });
      }).then(()=>console.log(this.state))
      .catch(error => console.log(error));
  };

  componentDidMount = () => {
    this.props.newPage();
    let id =  this.props.match.params.id;
    this.setState({projectID: id});
    this.getProject(id);
  };

  render() {
    let {coverImage, title, subtitle, date, context, category, tagsTopic, tagsFormat, description, authorship} = this.state;

    return (
      <section className="all-projects">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <h3>{context}</h3>
       <p>{description}</p>
       <img height="500px" src={coverImage} alt={title} />
      </section>
    );
  }
}


  

