import React, { Component } from 'react';
import '../css/landing.scss';

export default class LandingImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
      isHover: ''
    };
  }

  componentDidMount = () => {};
  showText(e) {
    this.setState({ isHover: 'portfolio' });
  }
  hideText(e) {
    this.setState({ isHover: '' });
  }

  render() {
    return (
      <section className="landing-section">
      <div className="fix-top" />
        <div
          className="landing-wrapper landing-area"
          onMouseEnter={e => this.showText(e)}
          onMouseLeave={e => this.hideText(e)}
        >
          <a
            className="landing-text landing-link"
            href="https://issuu.com/carlotajerez/docs/carlota_mir_portfolio_august_2018"
          >
            {this.state.isHover}
          </a>
        </div>
        <div className="fix-bottom" />
      </section>
    );
  }
}
