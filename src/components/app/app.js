import React, { Component } from "react";

import "./app.scss";
import "./normilize.scss";

import ItemsPart from "../items-part/items-part";
import InformationPart from "../information-part";

export default class App extends Component {
  render() {
    return (
      <header className="header">
        <a href="#" className="logo">
          MoneyGuard
        </a>
        <ItemsPart />
        <InformationPart />
      </header>
    );
  }
}
