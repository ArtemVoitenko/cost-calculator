import React from "react";
import PeriodSortPicker from "../period-sort-picker";
import SumSortPicker from "../sum-sort-picker";
import PurposeSortPicker from "../purpose-sort-picker";
import OperationTypeFilter from "../operation-type-filter";
import "./filters-section.scss";
const FilterSection = () => {
  return (
    <div className="filters-section">
      <p className="sphere-statistic__title filters-title">Filters</p>
      <div className="filters-wrapper">
        <PeriodSortPicker />
        <OperationTypeFilter />
        <PurposeSortPicker />
      </div>
      <div className="filters-wrapper">{/* <SumSortPicker /> */}</div>
    </div>
  );
};
export default FilterSection;
