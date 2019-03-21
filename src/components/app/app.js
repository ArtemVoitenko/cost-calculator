import React, { Component } from "react";

import CostList from "../cost-list";
import "./app.scss";
import "./normilize.scss";
import ItemCreator from "../item-creator";

import PeriodSortPicker from "../period-sort-picker";
import SumSortPicker from "../sum-sort-picker";
import PurposeSortPicker from "../purpose-sort-picker";

import OperationTypeFilter from "../operation-type-filter";
import DetailsSection from "../details-section";

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
        <OperationTypeFilter />
        <DetailsSection />
      </header>
    );
  }
}
