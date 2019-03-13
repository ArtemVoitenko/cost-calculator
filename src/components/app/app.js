import React, { Component } from "react";

import CostList from "../cost-list";
import "./app.scss";
import "./normilize.scss";
import ItemCreator from "../item-creator";
import Totals from "../totals";
import PeriodSortPicker from "../period-sort-picker./period-sort-picker";
import SumSortPicker from "../sum-sort-picker";

export default class App extends Component {
  render() {
    return (
      <header className="header">
        <a href="#" className="logo">
          MoneyGuard
        </a>
        <ItemCreator />
        <CostList />

        <PeriodSortPicker />
        <SumSortPicker />
        <Totals />
      </header>
    );
  }
}
