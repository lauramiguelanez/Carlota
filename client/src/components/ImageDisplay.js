import React, { Component } from 'react';
import { Carousel } from 'antd';
import '../css/antMod.scss';

export default class ImageDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
      project: this.props.project
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, project: nextProps['project'] });
  }

  showDescription(e) {
    if (this.props.project) {
      // console.log(e, this.props.project);
    }
  }

  hideDescription(e, project) {}

  getAboutCategory() {
    if (this.state.category === 'TRANSLATION') {
      return (
        <div className="category-about">
          <p>
            I have 5 years’ experience in freelance translation work within cultural and academic
            contexts, both in the private and public sectors. I work across fields like
            architecture, art history, humanities, politics, journalism or digital communications. I
            have worked with clients like{' '}
            <a href="http://www.mataderomadrid.org/">Matadero Madrid</a>,{' '}
            <a href="http://dpa-etsam.com/">ETSAM</a>,{' '}
            <a href="https://migrantjournal.com/">Migrant Journal</a>,{' '}
            <a href="https://www.ugr.es/">UGR</a>,{' '}
            <a href="https://estudioherreros.com/es/">Juan Herreros Studio</a>,{' '}
            <a href="http://lluisalexandrecasanovas.com/">Lluis Alexandre Casanovas Studio</a>,{' '}
            <a href="https://cadenaser.com/">Cadena Ser</a>,{' '}
            <a href="https://www.filmaffinity.com/es/main.html/">FilmAffinity</a>, or{' '}
            <a href="https://www.traficantes.net/">Ed. Traficantes de Sueños</a>. I also carry out
            proofreading and editing work of original texts and translations.
          </p>

          <p>
            {'<<<<<'} I work from English, Spanish, French, Italian and Catalan
            {'>>>>>'} into English and Spanish.
          </p>
          <p>
            <a href="mailto:mir.carlota@gmail.com">
              Just drop me a line with any general questions
            </a>
            , suggestions, or if you want to have a chat about a project in particular!
          </p>
          <p>Full translation CV available upon request`}</p>
        </div>
      );
    } else if (this.state.category === 'CURATING') {
      return (
        <div className="category-about">
          <p>
            I understand curatorial practice as an exercise in mediation, translation and
            communication whose aim is to generate new contexts for things, texts, discourses, and
            places to exist together.
          </p>
          <p>
            I see the role of the curator as a writer, an editor, a translator, a re-mixer, an
            academic, a carer, an educator, and a worker. All of those and none of them at the same
            time. I believe we must desacralize the curatorial: the curatorial is a site of power
            which has been used in the wrong way for way too long, and I want to dismantle that
            position in the joyful company of others.
          </p>
          <p>
            My curatorial practice is both individual and collective. It takes on different formats
            – public programmes, festivals, exhibitions, conferences, publications, workshops,
            dinners, events – but it is usually centred around body politics, notions of gender and
            sexuality in architecture, the arts, heritage, technology, new ecologies, and
            contemporary history.
          </p>
          <p>
            I have worked/am currently working in contexts such as{' '}
            <a href="https://www.modernamuseet.se/stockholm/en/">Moderna Museet</a>,{' '}
            <a href="http://ca2m.org/es/itemlist/">CA2M Madrid</a>,{' '}
            <a href="https://supermarketartfair.com/">Supermarket Art Fair</a>,{' '}
            <a href="http://www.mataderomadrid.org/">Matadero Madrid</a>,{' '}
            <a href="https://www.kth.se/">KTH</a>,{' '}
            <a href="http://indexfoundation.se/">Index: The Swedish Contemporary Arts Foundation</a>
            , <a href="http://kulturhusetstadsteatern.se/">Kulturhuset</a>, or{' '}
            <a href="https://www.eunicglobal.eu/">EUNIC Stockholm</a>.
          </p>
        </div>
      );
    } else if (this.state.category === 'RESEARCH') {
      return (
        <div className="category-about">
          <p>
            My research practice sits at the intersection between academia and more experimental,
            artistic formats. Working both individually and collectively, my work gravitates around
            notions such as domesticity, the (counter)archive of art history, or heritage and
            queer/feminist issues in contemporary art, visual cultures and architecture.
          </p>
          <p>
            I currently carry out Post MA research in Architectural Theory and History at the{' '}
            <a href="https://www.kkh.se/en/">Royal Institute of Art, Stockholm</a>.
          </p>
          <p>
            My individual work has featured in various academic and independent platforms, such as{' '}
            <a href="http://etsamadrid.aq.upm.es/">Madrid School of Architecture</a>,{' '}
            <a href="http://www.weareorlando.co.uk/">Orlando Magazine</a>,{' '}
            <a href="https://www.ugr.es/">Universidad de Granada</a>, or{' '}
            <a href="http://uam.es/UAM/Home.htm?language=es">Universidad Autónoma de Madrid</a>,
            amongst others. Collective work as part of the curatorial team of the architectural
            platform <a href="https://doscincocincodaetsam.wordpress.com/">255</a> has been
            exhibited at the{' '}
            <a href="https://www.labiennale.org/en/architecture/2018/national-participations/spain">
              Spanish Pavilion of the 2018 Venice Architecture Biennale
            </a>
            . Collective projects the context of the Royal Institute of Art in Stockholm have
            featured in <a href="http://m12.manifesta.org/">Manifesta ’12</a>,{' '}
            <a href="http://aschoolofschools.iksv.org/">Istanbul Design Biennial</a>, or{' '}
            <a href="http://www.konsthallc.se/">Konsthall C</a> in Stockholm.
          </p>
          <p>
            I graduated from her BA in Art History and French with Study Abroad Year in 2013 (
            <a href="https://www.sussex.ac.uk/">University of Sussex, Great Britain</a>/
            <a href="http://english.lettres.sorbonne-universite.fr/">Paris Sorbonne IV, France</a>)
            and I hold an MA in Contemporary Art and Visual Culture (Distinction) from{' '}
            <a href="http://uam.es/UAM/Home.htm?language=es">Universidad Autónoma de Madrid</a>/
            <a href="https://www.museoreinasofia.es/">Museo Nacional Reina Sofia</a>.
          </p>
        </div>
      );
    } else {
      return <div />;
    }
  }

  showContent() {
    if (this.props.project === null) {
      this.getAboutCategory();
    } else if (this.props.project) {
      console.log('project', this.props.project, this.state.project);
      let images = this.props.project.images;
      if (this.props.isDetail) {
        if (images) {
          console.log('images', images);
          return images.map(image => (
            <div className="project-img-wrapper-detail">
              <img src={image} className="project-img-list" />
            </div>
          ));
        }
      } else {
        if (images) {
          console.log('images', images);
          return images.map(image => (
            <div className="project-img-wrapper-detail">
              <img src={image} className="project-img-list" />
            </div>
          ));
        }
      }
    }
  }

  render() {
    return (
      <div className=".ant-carousel .slick-slide">
        <Carousel
          autoplay
          style={'display: flex'}
          onMouseEnter={e => this.showDescription()}
          onMouseLeave={e => this.hideDescription()}
        >
          {this.showContent()}
        </Carousel>
      </div>
    );
  }
}
