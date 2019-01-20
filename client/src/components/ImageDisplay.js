import React, { Component } from 'react';
import { Carousel } from 'antd';
import '../css/antMod.scss';

export default class ImageDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
      project: this.props.project,
    };
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, project: nextProps['project'] });
  }

  render() {
    let images = this.props.project.images;
    return (
      <div className=".ant-carousel .slick-slide">
        <Carousel autoplay>
        {images.map(image => <div><img src={image} className="project-img-list"></img></div>)}
          {/* <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div> */}
        </Carousel>
      </div>
    );
  }
}
