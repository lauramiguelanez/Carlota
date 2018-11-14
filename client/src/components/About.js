import React, { Component } from "react";
import "../css/content.scss";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null
    };
  }

  componentDidMount = () => {
    this.props.newPage();
  };

  render() {
    return (
      <section>
        <p>
          Carlota Mir (b. Carlota Jerez, Spain, 1991) is a curator, researcher,
          translator and cultural agent currently based in Stockholm, Sweden.
          Her work, of a multidisciplinary and multilingual nature, interrogates
          the relationship between gender, sexuality and space in visual
          culture, design, curating and architecture. Her research and
          curatorial work focuses particularly on the notion of domesticity as a
          political arena from a feminist and queer perspective.
        </p>

        <p>
          Carlota currently combines her work as an independent curator in
          Stockholm with research work as a participant of the research groups
          Decolonizing Architecture and R-Lab at the Royal Institute of Art in
          Stockholm. In September 2016, she moved to Sweden upon receiving a
          scholarship in cultural programming for the Spanish Agency for
          International Cooperation and Development (AECID) in Stockholm.
        </p>

        <p>
          She has curated or is currently curating exhibitions, conferences,
          editorial work and public programmes for KTH, Kulturhuset, Index
          Contemporary Arts Foundation, Global Challenges Foundation, EUNIC
          Stockholm, ETSAM, or Matadero Madrid, amongst others.
        </p>

        <p>
          Her individual research work has been published internationally in
          various academic and independent platforms, such as ETSAM Madrid,
          Orlando Magazine, and Universidad Autónoma de Madrid. Her work as part
          of the curatorial team of the architectural platform 255 will be
          exhibited at the Spanish Pavilion of the 2018 Venice Architecture
          Biennale and has been exhibited at the Istanbul Biennial of Design,
          Museo Reina Sofía, COAM, or Matadero Madrid, amongst others.
        </p>

        <p>
          Carlota graduated from her BA in Art History and French with Study
          Abroad Year in 2013 (University of Sussex, Great Britain/Paris
          Sorbonne IV, France) and she holds an MA in Contemporary Art and
          Visual Culture from Universidad Autónoma de Madrid/Museo Nacional
          Reina Sofia.
        </p>
      </section>
    );
  }
}
