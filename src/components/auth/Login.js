import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../../firebase";
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
      <div>
        <form action="" onSubmit={this.handleSubmit}>
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
          <button type="submit">Sign In</button>
        </form>
        {errors.lenght > 0
          ? errors.map(error => {
              return <p>{error.message}</p>;
            })
          : null}
        <Link to="/Register">Don't have an account?</Link>
      </div>
    );
  }
}
