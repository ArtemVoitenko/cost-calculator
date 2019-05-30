import React, { Component, Fragment } from "react";

import "./app.scss";

import "../../fonts/fonts.scss";
import "../../styles/reset.scss";

import FinanceApp from "../finance-app";
import NoteApp from "../notes/notes";

import { Route, Link } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Link to="/NoteApp">NoteApp</Link>
        <Link to="/FinanceApp">NoteApp</Link>
        <Route path="/NoteApp" component={NoteApp} />
        <Route path="/FinanceApp" component={FinanceApp} />
      </Fragment>

      // <NoteApp />
    );
  }
}
