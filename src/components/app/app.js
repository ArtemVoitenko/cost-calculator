import React, { Component } from "react";

import CostList from "../cost-list";
import "./normilize.scss";
import ItemCreator from "../item-creator";
import Totals from "../totals";
import PeriodSortPicker from "../period-sort-picker./period-sort-picker";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <a href="#" className="logo">
            MoneyGuard
          </a>
          <ItemCreator />
          <CostList />
          <Totals />
          <PeriodSortPicker />
        </header>
      </div>
    );
  }
}
