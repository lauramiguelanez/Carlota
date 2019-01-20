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
  showDescription(e, project) {
    console.log(e, project);
  }

  hideDescription(e, project) {}

  render() {
    let images = this.props.project.images;
    return (
      <div className=".ant-carousel .slick-slide">
        <Carousel
          autoplay
          style={'display: flex'}
          onMouseEnter={e => this.showDescription(e, this.props.project)}
          onMouseLeave={e => this.hideDescription(e, this.props.project)}
        >
          {images.map(image => (
            <div className="project-img-wrapper">
              <img src={image} className="project-img-list" />
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}
