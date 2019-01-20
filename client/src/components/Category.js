import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/content.scss';
require('dotenv').config();
// import ProjectDetail from "./ProjectDetail";

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
      category: this.props.category
    };
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/api`
    });
    this.getProjects(this.state.category);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, category: nextProps['category'] });
    this.getProjects(this.state.category);
  }

  componentDidMount = () => {
    this.props.newPage();
    console.log(this.props.category);
    this.setState({ category: this.props.category });
    console.log(this.state);
  };

  filterProjects(category) {}
  getAboutCategory(){
    if (this.state.category=="TRANSLATION"){
      return(<div>{`Translation	
        I have 5 years’ experience in freelance translation work within cultural and academic contexts, both in the private and public sectors. I work across fields like architecture, art history, humanities, politics, journalism or digital communications. I have worked with clients like Matadero Madrid, ETSAM, Migrant Journal, UGR, Juan Herreros Studio, Lluis Alexandre Casanovas Studio, Cadena Ser, FilmAffinity, or Ed. Traficantes de Sueños.	 
        I also carry out proofreading and editing work of original texts and translations.	
          
        <<<<< I work from English, Spanish, French, Italian and Catalan 	
        >>>>> into English and Spanish.	
        Just drop me a line with any general questions, suggestions, or if you want to have a chat about a project in particular!	
        Full translation CV available upon request`}</div>)
    } else {
      return <div/>
    }
  }

  getProjects = category => {
    let projects;
    return this.service
      .get(`/project/${category}`)
      .then(projs => {
        projects = projs.data;
        console.log(projects);
        this.setState({ projectArr: projects });
      })
      .catch(error => console.log(error));
  };

  render() {
    let projects = this.state.projectArr;
    if (projects) {
      projects.forEach(e => {});
      return (
        <section className="all-projects">
          {projects.map(project => {
            return (
              <div>
              {this.getAboutCategory()}
                <div key={project._id} className="project-in-feed">
                  <Link to={`/project/${project._id}`}>
                    <img className="project-img-feed" width="200px" src={project.coverImage} />
                  </Link>
                  <p className="projects-title">{project.title}</p>
                </div>
              </div>
            );
          })}
        </section>
      );
    } else {
      return <section className="profile-feed" />;
    }
  }
}
