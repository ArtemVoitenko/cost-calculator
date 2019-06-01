import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../../firebase";
export class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
    errors: []
  };
  isFormValid = () => {
    let errors = [];
    let error;
    if (this.isFormEmpty(this.state)) {
      error = { message: "Fill in all fields" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else if (!this.isPasswordValid(this.state)) {
      error = { message: "Password is invalid" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else {
      return true;
    }
  };
  isFormEmpty = ({ username, email, password, passwordConfirm }) => {
    return !username || !email || !password || !passwordConfirm;
  };
  isPasswordValid = ({ password, passwordConfirm }) => {
    if (password.lenght < 6 || passwordConfirm < 6) {
      return false;
    } else if (password !== passwordConfirm) {
      return false;
    } else {
      return true;
    }
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.isFormValid()) {
      this.setState({ errors: [] });
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(createdUser => {
          console.log(createdUser);
        })
        .catch(err => {
          console.error(err);
        });
    }
  };
  render() {
    const { email, password, passwordConfirm, username, errors } = this.state;

    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={this.handleChange}
            value={username}
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={this.handleChange}
            value={email}
          />
          <input
            type="password"
            placeholder="********"
            name="password"
            onChange={this.handleChange}
            value={password}
          />
          <input
            type="password"
            placeholder="********"
            name="passwordConfirm"
            onChange={this.handleChange}
            value={passwordConfirm}
          />
          <button type="submit">Register</button>
        </form>
        {errors.lenght > 0
          ? errors.map(error => {
              return <p>{error.message}</p>;
            })
          : null}
        <Link to="/login">Already have an account?</Link>
      </div>
    );
  }
}
