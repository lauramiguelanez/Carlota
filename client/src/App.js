import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./css/App.scss";

import Navbar from "./components/Navbar";
import LandingAnimation from "./components/LandingAnimation";
import About from "./components/About";
import UploadProject from "./components/UploadProject";


class App extends Component {
  constructor() {
    super();
    this.state = {
      page: "Home"
    };
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <Navbar/>
        </header>
        <div className="fix-top"></div>
        <main>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' render={() => <LandingAnimation newPage={()=>{this.setState({page:"Home"})}}/> }/>  
              <Route exact path='/about' render={() => <About newPage={()=>{this.setState({page:"About"})}}/> }/>  
              <Route exact path='/upload' render={() => <UploadProject newPage={()=>{this.setState({page:"Upload"})}}/> }/>  
            </Switch>
          </BrowserRouter>
        </main>
        <div className="fix-bottom"></div>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
