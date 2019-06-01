import React, { Component, Fragment } from "react";

import "./app.scss";

import "../../fonts/fonts.scss";
import "../../styles/reset.scss";
import { Link } from "react-router-dom";
import firebase from "../../firebase";
export default class App extends Component {
  onLogOut = () => {
    firebase.auth().signOut();
  };
  render() {
    return (
      <Fragment>
        <Link to="/NoteApp">NoteApp</Link>
        <Link to="/FinanceApp">NoteApp</Link>
        <Link to="/WeatherForecast">WeatherForecast</Link>
        <button onClick={this.onLogOut}>log out</button>
        {/* <Login /> */}
      </Fragment>

      // <NoteApp />
    );
  }
}
