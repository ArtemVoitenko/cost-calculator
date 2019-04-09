import React, { Component } from "react";
import ItemCreator from "../item-creator";
import CostList from "../cost-list";
import PeriodSortPicker from "../period-sort-picker";
import SumSortPicker from "../sum-sort-picker";
import PurposeSortPicker from "../purpose-sort-picker";
import OperationTypeFilter from "../operation-type-filter";
import DateLine from "../date-line";
export default class ItemsPart extends Component {
  render() {
    return (
      <div>
        <DateLine />
        <ItemCreator />
        <CostList />
        <PeriodSortPicker />
        <SumSortPicker />
        <PurposeSortPicker />
        <OperationTypeFilter />
      </div>
    );
  }
}
