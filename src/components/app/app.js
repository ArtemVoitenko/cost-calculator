import React, { Component } from "react";

import CostList from "../cost-list";
import "./app.scss";
import "./normilize.scss";
import ItemCreator from "../item-creator";
import Totals from "../totals";
import PeriodSortPicker from "../period-sort-picker";
import SumSortPicker from "../sum-sort-picker";
import PurposeSortPicker from "../purpose-sort-picker";
import PurposesChart from "../purposes-chart";
import OperationTypeFilter from "../operation-type-filter";

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
        <PurposeSortPicker />
        <Totals />
        <PurposesChart />
        <OperationTypeFilter />
      </header>
    );
  }
}
