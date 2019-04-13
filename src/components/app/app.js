import React, { Component } from "react";

import "./app.scss";

import "./normilize.scss";
import "../../fonts/fonts.scss";
import "../../styles/reset.scss";

import ItemsPart from "../items-part/items-part";

import DetailsSection from "../details-section/details-section";


export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-6">
            <header className="header">

              <a href="#" className="logo">
                MoneyGuard
              </a>

            </header>
            <ItemsPart />
          </div>
          <div className="col-12 col-lg-6">
            <DetailsSection />
          </div>
        </div>
      </div>
    );
  }
}
