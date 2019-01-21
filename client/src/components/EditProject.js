import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import '../css/antMod.scss';
import { Form, Upload, Icon, Modal } from 'antd';
require("dotenv").config();

export default class UploadProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
      redirect: false,
      previewVisible: false,
    previewImage: '',
    fileList: [{
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }],
    };
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/api`
    });
  }

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
          authorship: project.data.authorship
        });
      })
      .then(() => console.log(this.state))
      .catch(error => console.log(error));
  };

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleChangeFile(e) {
    const { name, files } = e.target;
    this.setState({ file: e.target.files[0] });
  }

  uploadImage(file, name) {
    const formData = new FormData();
    formData.append("photo", file);
    return this.service
      .post("/uploadCloud", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      })
      .then(img => {
        this.setState({ img_url: img.data.secure_url, redirect: true });
      })
      .catch(error => console.log(error));
  }

  createProject = (
    image_url,
    title,
    subtitle,
    date,
    context,
    organiser,
    collaboratingEntitites,
    category,
    tagsTopic,
    tagsFormat,
    description,
    authorship
  ) => {
    //faltan demas datos
    let project = {
      coverImage: image_url,
      title,
      subtitle,
      date,
      context,
      organiser,
      collaboratingEntitites,
      category,
      tagsTopic,
      tagsFormat,
      description,
      authorship
    };
    console.log(project);
    return this.service
      .post("/project", project)
      .then(proj => {
        console.log("CREATED NEW PROJECT:");
        console.log(proj.data);
      })
      .catch(error => console.log(error));
  };

  handleSubmit(e) {
    e.preventDefault();
    this.uploadImage(this.state.file).then(() => {
      console.log("uploaded image to this space");
      console.log(this.state.img_url);
      this.createProject(
        this.state.img_url,
        this.state.title,
        this.state.subtitle,
        this.state.date,
        this.state.context,
        this.state.organiser,
        this.state.collaboratingEntitites,
        this.state.category,
        this.state.tagsTopic,
        this.state.tagsFormat,
        this.state.description,
        this.state.authorship
      );
    });
  }

  componentDidMount = () => {
    this.props.newPage();
  };

  render() {
    return (
      <section className="form-card">

      </section>
    );
  }
}
