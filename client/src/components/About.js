import React, { Component } from 'react';
import '../css/content.scss';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null
    };
  }

  componentDidMount = () => {
    //this.props.newPage();
  };

  render() {
    return (
      <section className="about-section"><div className="about-area">
        <p>
          Hey! I’m Carlota. I work in curating, translating and research. And I also do boring work
          at home, which I like to think of as self-care.
        </p>
        <p> I work from these fields simultaneously, and I find they often speak to each other.</p>
        <p>
          I’m keen on making connections between gender, territories, people, affects, spaces, race
          and sexuality in art, architecture, and basically everywhere, through feminist pedagogies
          and the curatorial. I like to work with a variety of contexts, from public programmes to
          publications or spatial interventions/exhibitions.
        </p>
        <p>
          As a translator, I have been working freelance for a number of years and I love working
          with texts that have to do with art, culture, politics, journalism, or academia, but adapt
          to other contexts as well. I’m happy to chat over any questions or requests you may have -
          just drop me a line!
        </p>
        <p>
          I like to move. I’m currently based in Stockholm, Sweden, though I have been based in the
          UK, France and Spain before.
        </p>
        <p>
          I’m currently working independently and doing research at the Stockholm Royal Institute of
          Arts. As a curator or editor, I am or have been involved with institutions like Moderna
          Museet, C2M, Kulturhuset, Index Contemporary Arts Foundation, EUNIC Stockholm, KTH/ KKH,
          Global Challenges Foundation, ETSAM, or Matadero Madrid, as well as with a bunch of
          independent and self managed projects.
        </p>
        <p>
          I graduated from my BA in Art History and French in 2013 (University of Sussex, Great
          Britain/Paris Sorbonne IV, France) and I hold an MA in Contemporary Art and Visual Culture
          from Universidad Autónoma de Madrid/Museo Nacional Reina Sofia and Post MA in
          Architectural History and Theory from Stockholm’s Royal Institute of Arts.
        </p>
        </div>
      </section>
    );
  }
}
