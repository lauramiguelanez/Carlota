import React, { Component } from "react";
import { Switch, Route, BrowserRouter, Router } from "react-router-dom";
import "./css/App.scss";

import Navbar from "./components/Navbar";
import LandingAnimation from "./components/LandingAnimation";
import About from "./components/About";
import UploadProject from "./components/UploadProject";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import Footer from "./components/Footer";
import Category from "./components/Category";


class App extends Component {
  constructor() {
    super();
    this.state = {
      page: "Home"
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="header">
            <Navbar/>
          </header>
          <div className="fix-top"></div>
          <main>
              <Switch> 
                <Route exact path='/' render={() => <LandingAnimation newPage={()=>{this.setState({page:"Home"})}}/> }/> 
                <Route exact path='/about' render={() => <About newPage={()=>{this.setState({page:"About"})}}/> }/>  

                <Route exact path='/curating' render={() => <Category category={'curating'} newPage={()=>{this.setState({page:"Curating"})}}/> }/> 
                <Route exact path='/translation' render={() => <Category category={'translation'} newPage={()=>{this.setState({page:"Translation"})}}/> }/> 
                <Route exact path='/research' render={() => <Category category={'research'} newPage={()=>{this.setState({page:"Research"})}}/> }/> 

                <Route exact path='/upload' render={() => <UploadProject newPage={()=>{this.setState({page:"Upload"})}}/> }/>  
                <Route exact path='/projects' render={() => <Projects newPage={()=>{this.setState({page:"Projects"})}} /> }/>  
                <Route path='/project/:id' render={(props) => <ProjectDetail newPage={()=>{this.setState({page:"ProjectDetail"})}}{...props}/> }/>  
              </Switch>
          </main>
          <div className="fix-bottom"></div>
          <footer>
            <Footer/>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
