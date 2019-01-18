import React, { Component } from 'react';
//import { Link } from "react-router-dom";
import '../css/landing.scss';
import { langList } from './constants/landingLanguages';

let { ActionLangList, ObjectLangList } = langList;

export default class LandingAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null
    };
  }

  componentDidMount = () => {};
  showText(e) {}

  render() {
    return (
      <section>
        <div className="landing-wrapper">
          <div className="landing-area" onMouseOver={e => this.showText(e)}>
            <a className="landing-text landing-link" href="https://issuu.com/carlotajerez/docs/carlota_mir_portfolio_august_2018">
              <img className="landing-image" src="https://res.cloudinary.com/dmtbzrye8/image/upload/v1547832899/carlotaWeb/cover_prov.png" />
            </a>
          </div>
        </div>
      </section>
    );
  }
}
