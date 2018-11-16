import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
require("dotenv").config();
//import "../css/forms.scss";

export default class UploadProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null, 
      redirect: false
    };
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/api`
    });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleChangeFile(e) {  
    const { name, files } = e.target;
    this.setState({ file: e.target.files[0]});
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

  createProject = (image_url, title, date, location, category, tagsTopic, tagsFormat, description, role) => { //faltan demas datos
    let project = { coverImage: image_url, title, date, location, category, tagsTopic, tagsFormat, description, role};
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
    this.uploadImage(this.state.file)
    .then(() => {
      console.log("uploaded image to this space");
      console.log(this.state.img_url);
      this.createProject(this.state.img_url, this.state.title, this.state.date, this.state.location, this.state.category, this.state.tagsTopic, this.state.tagsFormat, this.state.description, this.state.role);
    });
  }

  componentDidMount = () => {
    this.props.newPage();
  };

  render() {
    return (
      <section className="form-card">
        <div className="field">
          <form onSubmit={e => this.handleSubmit(e)}>
            <div className="control">
                <label className="label">Title</label>
                <input className="input is-primary" type="text" name="title" onChange={e => this.handleChange(e)} placeholder="My Project" />
            </div>
            <div className="control">
                <label className="label">Description</label>
                <input className="input is-primary" type="text" name="description" onChange={e => this.handleChange(e)} placeholder="This is an awesome project" />
            </div>
            <div className="control">
                <label className="label">Location</label>
                <input className="input is-primary" type="text" name="location" onChange={e => this.handleChange(e)} placeholder="Madrid, Spain" />
            </div>
            <div className="control">
                <label className="label">Date</label>
                <input className="input is-primary" type="date" name="date" onChange={e => this.handleChange(e)}/>
            </div>
            <div className="control">
                <label className="label">Tags (topic)</label>
                <input className="input is-primary" type="text" name="tagsTopic" onChange={e => this.handleChange(e)} placeholder="Enter comma-separated tags"/>
            </div>
            <div className="control">
                <label className="label">Tags (format)</label>
                <input className="input is-primary" type="text" name="tagsFormat" onChange={e => this.handleChange(e)} placeholder="Enter comma-separated tags"/>
            </div>
            <div className="control">
                <label className="label">Category</label>
                <select name="category" onChange={e => this.handleChange(e)}>
                    <option value="RESEARCH">Research</option>
                    <option value="CURATING">Curating</option>
                    <option value="TRASLATION">Traslation</option>
                </select>
            </div>
            <div className="control">
                <label className="label">Role</label>
                <select name="category" onChange={e => this.handleChange(e)}>
                    <option value="INDIVIDUAL">Individual</option>
                    <option value="COLABORATION">Colaboration</option>
                </select>
            </div>
            <div className="control">
              <label className="file-label">Cover image</label>
              <input className="file-input" name="coverImage" type="file" onChange={e => this.handleChangeFile(e)} /> 
            </div>
            <button className="button is-primary" type="submit"> Upload </button>
          </form>
        </div>
      </section>
    );
  }
}
