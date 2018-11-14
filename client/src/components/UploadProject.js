import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import axios from "axios";
require('dotenv').config();
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

  componentDidMount = () => {
    this.props.newPage();
  };

  render() {
    return (
      <section>
        <form />
      </section>
    );
  }
}
