import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/landing.scss";

export default class LandingAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
  }

  componentDidMount = () => {
    this.props.newPage();
  };

  render() {
    return (
      <section className="rw-wrapper">
        <div className="rw-sentence">
          <div className="rw-words rw-words-1">
            <span>I build</span>
            <span>I translate</span>
            <span>I curate</span>
            <span>I question</span>
            <span>I research</span>
            <span>I write</span>
          </div>
          <div className="rw-words rw-words-2">
            <span>architecture</span>
            <span>language</span>
            <span>art</span>
            <span>gender</span>
            <span>research</span>
            <span>text</span>
          </div>
        </div>
      </section>
    );
  }
}







