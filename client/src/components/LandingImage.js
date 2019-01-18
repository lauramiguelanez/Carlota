import React, { Component } from 'react';
import '../css/landing.scss';

export default class LandingImage extends Component {
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
        <div className="landing-wrapper landing-area" onMouseOver={e => this.showText(e)}>
          <a
            className="landing-text landing-link"
            href="https://issuu.com/carlotajerez/docs/carlota_mir_portfolio_august_2018"
          >
            <img
              className="landing-image"
              src="https://res.cloudinary.com/dmtbzrye8/image/upload/v1547832899/carlotaWeb/cover_prov.png"
            />
          </a>
        </div>
      </section>
    );
  }
}
