import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import axios from 'axios';
import ImageDisplay from './ImageDisplay';
require('dotenv').config();
//import "../css/project.scss";

export default class ProjectDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
      editMode: false
    };
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/api`
    });
  }

  getProject = id => {
    return this.service
      .get(`/project/${id}`)
      .then(project => {
        this.setState({
          title: project.data.title,
          subtitle: project.data.subtitle,
          date: project.data.date,
          context: project.data.context,
          category: project.data.category,
          coverImage: project.data.coverImage,
          images: project.data.images,
          tagsTopic: project.data.tagsTopic,
          tagsFormat: project.data.tagsFormat,
          description: project.data.description,
          externalLink: project.data.externalLink,
          authorship: project.data.authorship,
          textOriginal: project.data.textOriginal,
          textTranslated: project.data.textTranslated,
          textNotes: project.data.textNotes,
          project: project.data
        });
      })
      .then(() => console.log(this.state))
      .catch(error => console.log(error));
  };

  componentDidMount = () => {
    this.props.newPage();
    this.setState({ editMode: this.props.editMode });
    let id;
    if (this.props.id) {
      id = this.props.id;
    } else if (this.props.match.params.id) {
      id = this.props.match.params.id;
    } else this.setState({ projectID: id });
    this.getProject(id);
  };

  getEditButton() {
    if (this.state.editMode === true) {
      return (
        <Link to={`/editproject/${this.props.id}`}>
          <button>EDIT</button>
        </Link>
      );
    }
  }

  renderImgs(images) {
    if (images) {
      return images.map(imageSrc => {
        // console.log(imageSrc);
        return <img className="project-img" src={imageSrc} />;
      });
    }
  }

  getDescriptions(category) {
    console.log('getDescription', category);
    if (category === 'TRANSLATION') {
      console.log(
        'trans',
        this.state.textOriginal,
        this.state.textTranslated,
        this.state.textNotes
      );
      return (
        <div>
        <h3>Original text:</h3>
          <p>{this.state.textOriginal}</p>
          <h3>Translated text:</h3>
          <p>{this.state.textTranslated}</p>
          <h4>---</h4>
          <p>{this.state.textNotes}</p>
        </div>
      );
    } else {
      return <p>{this.state.description}</p>;
    }
  }

  render() {
    let {
      coverImage,
      title,
      subtitle,
      date,
      context,
      collaboratingEntitites,
      organiser,
      category,
      tagsTopic,
      tagsFormat,
      authorship
    } = this.state;

    let year = date ? new Date(date).getFullYear() : '';

    return (
      <section className="project-detail">
        <h1 className="project-title">{title}</h1>
        <h2 className="project-subtitle">{subtitle}</h2>
        <p className="project-author">Authorship: {authorship}</p>
        <h3 className="project-context">{context}</h3>
        <p className="project-context">{organiser}</p>
        <p className="project-context">{collaboratingEntitites}</p>
        {/* <img className="project-img" src={coverImage} alt={title} /> */}
        <Row>
          <Col span={12}>
            <ImageDisplay project={this.state.project} category={category} isDetail={true} />
          </Col>
          <Col span={12}>{this.getDescriptions(category)}</Col>
        </Row>

        <h3 className="project-category">
          {category} - {year}
        </h3>
        <p className="project-tags">
          {tagsTopic}, {tagsFormat}
        </p>
        {/* this.renderImgs(images) */}
        {/* this.getEditButton() */}
      </section>
    );
  }
}
