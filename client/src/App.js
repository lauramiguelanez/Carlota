import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Router } from 'react-router-dom';
import { Layout } from 'antd';

import 'antd/dist/antd.css';
import './css/antMod.scss';
import './css/App.scss';

import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import LandingAnimation from './components/LandingAnimation';
import LandingImage from './components/LandingImage';
import About from './components/About';
import UploadProject from './components/UploadProject';
import Projects from './components/Projects';
import ProjectsStrip from './components/ProjectsStrip';
import ProjectDetail from './components/ProjectDetail';
import Footer from './components/Footer';
import Footer2 from './components/Footer2';
import Category from './components/Category';
import EditProject from './components/EditProject';

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 'Home'
    };
  }

  render() {
    return (
      <div>
        <div className="App">
          <header className="header">
            <Navbar />
          </header>
          {/* <div className="fix-top" /> */}
          <main>
            <Switch>
              <Route
                key="home"
                exact
                path="/"
                render={() => (
                  <LandingImage
                    newPage={() => {
                      this.setState({ page: 'Home' });
                    }}
                  />
                )}
              />
              <Route
                exact
                path="/about"
                render={() => (
                  <About
                    newPage={() => {
                      this.setState({ page: 'About' });
                    }}
                  />
                )}
              />

              <Route
                exact
                path="/curating"
                render={() => (
                  <ProjectsStrip
                    category={'curating'}
                    newPage={() => {
                      this.setState({ page: 'Curating' });
                    }}
                  />
                )}
              />
              <Route
                exact
                path="/translation"
                render={() => (
                  <ProjectsStrip
                    category={'translation'}
                    newPage={() => {
                      this.setState({ page: 'Translation' });
                    }}
                  />
                )}
              />
              <Route
                exact
                path="/research"
                render={() => (
                  <ProjectsStrip
                    category={'research'}
                    newPage={() => {
                      this.setState({ page: 'Research' });
                    }}
                  />
                )}
              />

              <Route
                exact
                path="/upload"
                render={() => (
                  <UploadProject
                    newPage={() => {
                      this.setState({ page: 'Upload' });
                    }}
                  />
                )}
              />
              <Route
                exact
                path="/projectsgrid"
                render={() => (
                  <Projects
                    newPage={() => {
                      this.setState({ page: 'Projects' });
                    }}
                  />
                )}
              />
              <Route
                exact
                path="/projects"
                render={() => (
                  <ProjectsStrip
                  category={'curating'}
                    newPage={() => {
                      this.setState({ page: 'ProjectsStrip' });
                    }}
                  />
                )}
              />
              <Route
                path="/project/:id"
                render={props => (
                  <ProjectDetail
                    newPage={() => {
                      this.setState({ page: 'ProjectDetail' });
                    }}
                    editMode={false}
                    {...props}
                  />
                )}
              />
              <Route
                path="/editproject/:id"
                render={props => (
                  <EditProject
                    newPage={() => {
                      this.setState({ page: 'EditProject' });
                    }}
                    {...props}
                  />
                )}
              />
            </Switch>
          </main>
          {/* <div className="fix-bottom" /> */}
          <footer>
            <Footer/>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
