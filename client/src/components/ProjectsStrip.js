import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ImageDisplay from './ImageDisplay';
import '../css/content.scss';
import '../css/project.scss';
require('dotenv').config();

export default class ProjectsStrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
      category: this.props.category,
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
  getAboutCategory() {
    if (this.state.category == 'TRANSLATION') {
      return (
        <div>{`Translation	
        I have 5 years’ experience in freelance translation work within cultural and academic contexts, both in the private and public sectors. I work across fields like architecture, art history, humanities, politics, journalism or digital communications. I have worked with clients like Matadero Madrid, ETSAM, Migrant Journal, UGR, Juan Herreros Studio, Lluis Alexandre Casanovas Studio, Cadena Ser, FilmAffinity, or Ed. Traficantes de Sueños.	 
        I also carry out proofreading and editing work of original texts and translations.	
          
        <<<<< I work from English, Spanish, French, Italian and Catalan 	
        >>>>> into English and Spanish.	
        Just drop me a line with any general questions, suggestions, or if you want to have a chat about a project in particular!	
        Full translation CV available upon request`}</div>
      );
    } else {
      return <div />;
    }
  }

  getProjects = category => {
    let projects;
    if (category) {
      return this.service
        .get(`/project/${category}`)
        .then(projs => {
          projects = projs.data;
          console.log(projects);
          this.setState({ projectArr: projects });
        })
        .catch(error => console.log(error));
    } else {
      return this.service
        .get('/project')
        .then(projs => {
          projects = projs.data;
          console.log(projects);
          this.setState({ projectArr: projects });
        })
        .catch(error => console.log(error));
    }
  };

  showImg(e, project) {
    console.log(project);
    this.setState({currentProject: project})
  }

  hideImg(e, project) {}

  render() {
    let projects = this.state.projectArr;

    if (projects) {
      projects.forEach(e => {});
      return (
        <section>
          <ImageDisplay project={this.state.currentProject? this.state.currentProject : projects[0]}/>
          <div className="projects-list">
            {projects.map(project => {
              return (
                <div
                  key={project._id}
                  className="project-in-list"
                  onMouseEnter={e => this.showImg(e, project)}
                  onMouseLeave={e => this.hideImg(e, project)}
                >
                  <Link to={`/project/${project._id}`}>
                    {/* <img className="project-img-list" width="200px" src={project.coverImage} /> */}
                    <h3>{project.title}</h3>
                    <h2>{project.context}</h2>
                    <p>{project.tagsTopic}</p>
                    <p>{project.tagsFormat}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      );
    } else {
      return <section className="profile-list" />;
    }
  }
}
