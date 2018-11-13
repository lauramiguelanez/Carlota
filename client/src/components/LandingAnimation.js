import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/landing.scss";

const actionsENG = [
  "I build ",
  "I translate ",
  "I curate ",
  "I question ",
  "I research ",
  "I write "
];
const objectsENG = [
  "architecture",
  "language",
  "art",
  "gender",
  "research",
  "text"
];

const actionsFRN = [
  "Je construis ",
  "Je traduis ",
  "Je cure ",
  "Je questionne ",
  "Je recherche ",
  "J'écris "
];
const objectsFRN = [
  "l'architecture",
  "le langage",
  "l'art",
  "le genre",
  "la recherche",
  "des textes"
];

const ActionLangList = [actionsENG, actionsFRN];
const ObjectLangList = [objectsENG, objectsFRN];

let actions = actionsENG;
let objects = objectsENG;

export default class LandingAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null
    };
  }

  componentDidMount = () => {
    this.setState({ actLang: ActionLangList[0], objLang: ObjectLangList[0] });
    this.changeSentence();
    this.props.newPage();
  };

  randomIndex = () => {
    let i = Math.floor(Math.random() * actions.length);
    return i;
  };

  randomSentence = () => {
    let randomAction = actions[this.randomIndex()];
    let randomObject = objects[this.randomIndex()];
    this.setState({ action: randomAction, object: randomObject });
  };

  changeSentence = () => {
    setInterval(this.randomSentence, 1000);
  };

 /*  rotate = array => {
    let push = Array.prototype.push,
      splice = Array.prototype.splice;

    return function(count) {
      var len = this.length >>> 0, // convert to uint
        count = count >> 0; // convert to int

      // convert count to value in range [0, len)
      count = ((count % len) + len) % len;

      // use splice.call() instead of this.splice() to make function generic
      push.apply(this, splice.call(this, 0, count));
      return this;
    };
  }; */

  changeLang = e => {
    /* this.rotate(ActionLangList);
    this.rotate(ObjectLangList); */
    this.setState({ actLang: ActionLangList[0], objLang: ObjectLangList[0] });
    this.changeSentence();
  };

  render() {
    let action = this.state.action;
    let object = this.state.object;

    return (
      <section>
        <div className="landing-wrapper">
          <div className="landing-text">
            <p className="landing-random action">{action}</p>
            <p className="landing-random object">{object}</p>
          </div>
        </div>
        <button className="lang-button" onClick={e => this.changeLang(e)}>
          LANG
        </button>
      </section>
    );
  }
}
