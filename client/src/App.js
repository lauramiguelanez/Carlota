import React, { Component } from "react";
//import { Switch, Route } from "react-router-dom";
import "./css/App.scss";

import Navbar from "./components/Navbar";
import LandingAnimation from "./components/LandingAnimation";

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
          <LandingAnimation newPage={()=>{this.setState({page:"Home"})}}/>
          {/* <Switch>
            <Route exact path='/' render={() => <LandingAnimation newPage={()=>{this.setState({page:"Home"})}}/> }/>  
            <Route exact path='/about' render={() => <LandingAnimation newPage={()=>{this.setState({page:"Home"})}}/> }/>  
          </Switch> */}
        </main>
        <div className="fix-bottom"></div>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
