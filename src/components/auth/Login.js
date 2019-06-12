import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../../firebase";
import "./auth.scss";
import Icon from "../icon";
export class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: []
  };
  isFormValid = ({ email, password }) => {
    return email && password;
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.isFormValid(this.state)) {
      this.setState({ errors: [] });
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(signedInUser => {
          console.log(signedInUser);
        })
        .catch(err => {
          console.error(err);
          this.setState({
            errors: this.state.errors.concat(err)
          });
        });
    }
  };
  render() {
    const { email, password, passwordConfirm, username, errors } = this.state;

    return (
      <div className="login">
        <div className="auth__form">
          <div className="auth__logo-wrapper">
            <Icon icon="logo" iconClass="auth__logo" />
          </div>
          <p className="auth__title">log in</p>
          <form className="auth__fields" action="" onSubmit={this.handleSubmit}>
            <input
              className="auth__input"
              type="email"
              placeholder="email"
              name="email"
              onChange={this.handleChange}
              value={email}
            />

            <input
              className="auth__input"
              type="password"
              placeholder="********"
              name="password"
              onChange={this.handleChange}
              value={password}
            />

            <button class="auth__submit" type="submit">
              Login
            </button>
          </form>
          {errors.lenght > 0
            ? errors.map(error => {
                return <p>{error.message}</p>;
              })
            : null}
          <Link className="auth__link" to="/Register">
            Don't have an account?
          </Link>
        </div>
        <div className="city-bg" />
      </div>
    );
  }
}
