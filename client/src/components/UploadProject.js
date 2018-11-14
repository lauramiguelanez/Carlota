import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
require("dotenv").config();
import "../css/forms.scss";

export default class UploadProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null
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
    this.setState({
      file: e.target.files[0]
    });
  }

  uploadImage(file) {
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

  createProject = (image_url, title, date, location, category, tags, description, role) => { //faltan demas datos
    let coverImage = { url: image_url, type: "IMAGE"};
    return this.service
      .post("/project", coverImage)
      .then(media => {
        console.log("CREATED NEW IMAGE:");
        console.log(media.data);
        this.addMediaToSpace(media.data);
      })
      .catch(error => console.log(error));
  };

  handleSubmit(e) {
    e.preventDefault();
    this.uploadImage(this.state.file)
    .then(() => {
      console.log("uploaded image to this space");
      console.log(this.state.img_url);
      this.createProject(this.state.img_url, title, date, location, category, tags, description, role);
    });
  }


  componentDidMount = () => {
    this.props.newPage();
  };

  render() {
    return (
      <section className="form-card">
        <div class="field">
          <form onSubmit={e => this.handleSubmit(e)}>
            <div class="control">
                <label class="label">Title</label>
                <input className="input is-primary" type="text" name="title" onChange={e => this.handleChange(e)} placeholder="My Project" />
            </div>
            <div class="control">
                <label class="label">Description</label>
                <input className="input is-primary" type="text" name="description" onChange={e => this.handleChange(e)} placeholder="This is an awesome project" />
            </div>
            <div class="control">
                <label class="label">Location</label>
                <input className="input is-primary" type="text" name="location" onChange={e => this.handleChange(e)} placeholder="Madrid, Spain" />
            </div>
            <div class="control">
                <label class="label">Date</label>
                <input className="input is-primary" type="date" name="date" onChange={e => this.handleChange(e)}/>
            </div>
            <div class="control">
                <label class="label">Tags</label>
                <input className="input is-primary" type="text" name="tags" onChange={e => this.handleChange(e)} placeholder="Enter comma-separated tags"/>
            </div>
            <div class="control">
                <label class="label">Category</label>
                <select name="category" onChange={e => this.handleChange(e)}>
                    <option value="RESEARCH">Research</option>
                    <option value="CURATING">Curating</option>
                    <option value="TRASLATION">Traslation</option>
                </select>
            </div>
            <div class="control">
                <label class="label">Role</label>
                <select name="category" onChange={e => this.handleChange(e)}>
                    <option value="INDIVIDUAL">Individual</option>
                    <option value="COLABORATION">Colaboration</option>
                </select>
            </div>
            <button className="button is-primary" type="submit"> Upload </button>
          </form>
        </div>
      </section>
    );
  }
}
