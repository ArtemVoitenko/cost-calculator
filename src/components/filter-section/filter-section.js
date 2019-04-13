import React, { Fragment } from "react";
import PeriodSortPicker from "../period-sort-picker";
import SumSortPicker from "../sum-sort-picker";
import PurposeSortPicker from "../purpose-sort-picker";
import OperationTypeFilter from "../operation-type-filter";
const FilterSection = () => {
  return (
    <Fragment>
      <PeriodSortPicker />
      <SumSortPicker />
      <PurposeSortPicker />
      <OperationTypeFilter />
    </Fragment>
  );
};
export default FilterSection;
