import React, { Component } from 'react';
//import { Link } from "react-router-dom";
import '../css/landing.scss';
import { langList } from './constants/landingLanguages';

let { ActionLangList, ObjectLangList } = langList;

export default class LandingAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
      iA: 0,
      iO: 0,
      iAa: 0,
      lang: 0,
      actLang: ActionLangList[0],
      objLang: ObjectLangList[0],
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

  nextIndex = type => {
    // console.log(this.state.iA, this.state.iO)
    if (type === 'act') {
      let ia = this.state.iAa;
      ia = ia >= 25 ? 0 : ia + 1;
      this.setState({ iAa: ia });
      let i = Math.round(ia / 5);
      this.setState({ iA: i });
      return i;
    } else if (type === 'obj') {
      let i = this.state.iO;
      i = i >= 5 ? 0 : i + 1;
      this.setState({ iO: i });
      return i;
    } else {
      return 0;
    }
  };

  randomSentence = () => {
    let randomAction = this.state.actLang[this.randomIndex()];
    let randomObject = this.state.objLang[this.randomIndex()];
    this.setState({ action: randomAction, object: randomObject });
  };

  nextSentence = () => {
    let nextAction = this.state.actLang[this.nextIndex('act')];
    let nextObject = this.state.objLang[this.nextIndex('obj')];
    this.setState({ action: nextAction, object: nextObject });
  };

  changeSentence = () => {
    // setInterval(this.randomSentence, 1700);
    setInterval(this.nextSentence, 1700);
  };

  changeLang = e => {
    let i = this.state.lang;
    i < ActionLangList.length - 1 ? i++ : (i = 0);
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
            <p className="landing-random object" >{object}</p>
          </div>
        </div>
      </section>
    );
  }
}
