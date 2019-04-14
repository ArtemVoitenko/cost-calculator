import React from "react";
import PeriodSortPicker from "../period-sort-picker";
import SumSortPicker from "../sum-sort-picker";
import PurposeSortPicker from "../purpose-sort-picker";
import OperationTypeFilter from "../operation-type-filter";
import "./filters-section.scss";
const FilterSection = () => {
  return (
    <div className="filters-section">
      <PeriodSortPicker />
      <SumSortPicker />
      <PurposeSortPicker />
      <OperationTypeFilter />
    </div>
  );
};
export default FilterSection;
