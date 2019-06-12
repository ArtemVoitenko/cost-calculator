import React, { Component, Fragment } from "react";

import "./app.scss";

import "../../fonts/fonts.scss";
import "../../styles/reset.scss";
import { Link } from "react-router-dom";
import firebase from "../../firebase";
import Icon from "../icon";
export default class App extends Component {
  onLogOut = () => {
    firebase.auth().signOut();
  };
  render() {
    return (
      <div className="main-page">
        <div className="application-nav">
          <Link className="application-nav__link note-link" to="/NoteApp">
            <Icon icon="note" iconClass="app-icon" />
            Note App
          </Link>
          <Link className="application-nav__link finance-link" to="/FinanceApp">
            <Icon icon="wallet" iconClass="app-icon" />
            Finance App
          </Link>
          <Link
            className="application-nav__link weather-link"
            to="/WeatherForecast"
          >
            <Icon icon="cloud" iconClass="app-icon" />
            Weather Forecast
          </Link>
          <Link className="application-nav__link todo-link" to="/TodoApp">
            <Icon icon="checklist" iconClass="app-icon" />
            Todo App
          </Link>
        </div>
        <button onClick={this.onLogOut}>log out</button>
        <div className="city-bg" />
      </div>
    );
  }
}
