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
    if (this.state.category === 'TRANSLATION') {
      return (
        <div>
        <p>I have 5 years’ experience in freelance translation work within cultural and academic contexts, both in the private and public sectors. I work across fields like architecture, art history, humanities, politics, journalism or digital communications. I have worked with clients like <a href="http://www.mataderomadrid.org/">Matadero Madrid</a>, <a href="http://dpa-etsam.com/">ETSAM</a>, <a href="https://migrantjournal.com/">Migrant Journal</a>, <a href="https://www.ugr.es/">UGR</a>, <a href="https://estudioherreros.com/es/">Juan Herreros Studio</a>, <a href="http://lluisalexandrecasanovas.com/">Lluis Alexandre Casanovas Studio</a>, <a href="https://cadenaser.com/">Cadena Ser</a>, <a href="https://www.filmaffinity.com/es/main.html/">FilmAffinity</a>, or <a href="https://www.traficantes.net/">Ed. Traficantes de Sueños</a>.	 
        I also carry out proofreading and editing work of original texts and translations.</p>
          
        <p><<<<< I work from English, Spanish, French, Italian and Catalan 	
        >>>>> into English and Spanish.</p>
        <p><a href="mailto:mir.carlota@gmail.com">Just drop me a line with any general questions</a>, suggestions, or if you want to have a chat about a project in particular!</p>	
        <p>Full translation CV available upon request`}</p></div>
      );
    } else if (this.state.category === "CURATING"){
      return (
        <div>
        <p>I understand curatorial practice as an exercise in mediation, translation and communication whose aim is to generate new contexts for things, texts, discourses, and places to exist together.</p>
        <p>I see the role of the curator as a writer, an editor, a translator, a re-mixer, an academic, a carer, an educator, and a worker.  All of those and none of them at the same time. I believe we must desacralize the curatorial: the curatorial is a site of power which has been used in the wrong way for way too long, and I want to dismantle that position in the joyful company of others.</p>
        <p>My curatorial practice is both individual and collective. It takes on different formats – public programmes, festivals, exhibitions, conferences, publications, workshops, dinners, events – but it is usually centred around body politics, notions of gender and sexuality in architecture, the arts, heritage, technology, new ecologies, and contemporary history.</p>
        <p>I have worked/am currently working in contexts such as <a href="https://www.modernamuseet.se/stockholm/en/">Moderna Museet</a>, <a href="http://ca2m.org/es/itemlist/">CA2M Madrid</a>, <a href="https://supermarketartfair.com/">Supermarket Art Fair</a>, <a href="http://www.mataderomadrid.org/">Matadero Madrid</a>, <a href="https://www.kth.se/">KTH</a>, <a href="http://indexfoundation.se/">Index: The Swedish Contemporary Arts Foundation</a>, <a href="http://kulturhusetstadsteatern.se/">Kulturhuset</a>, or <a href="https://www.eunicglobal.eu/">EUNIC Stockholm</a>.</p>
        </div>
      )
    } else if (this.state.category === "RESEARCH"){
      return (
        <div>
        <p></p>
        </div>
      )
    }else {
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
