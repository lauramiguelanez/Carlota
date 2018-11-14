import React, { Component } from "react";
//import { Link } from "react-router-dom";
import "../css/landing.scss";
import {langList} from './constants/landingLanguages';

let {ActionLangList, ObjectLangList} = langList;

export default class LandingAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null
    };
  }

  componentDidMount = () => {
    this.setState({ actLang: ActionLangList[0], objLang: ObjectLangList[0], lang: 0 });
    this.changeSentence();
    this.props.newPage();
  };

  randomIndex = () => {
    let i = Math.floor(Math.random() * this.state.actLang.length);
    return i;
  };

  randomSentence = () => {
    let randomAction = this.state.actLang[this.randomIndex()];
    let randomObject = this.state.objLang[this.randomIndex()];
    this.setState({ action: randomAction, object: randomObject });
  };

  changeSentence = () => {
    setInterval(this.randomSentence, 1700);
  };

  changeLang = e => {
    let i = this.state.lang;
    i<(ActionLangList.length-1)? i++: i=0;

    this.setState({ actLang: ActionLangList[i], objLang: ObjectLangList[i], lang: i });
  };

  render() {
    let action = this.state.action;
    let object = this.state.object;

    return (
      <section>
        <div className="landing-wrapper">
          <div className="landing-text" onMouseOver={e => this.changeLang(e)}>
            <p className="landing-random action">{action}</p>
            <p className="landing-random object">{object}</p>
          </div>
        </div>
      </section>
    );
  }
}
