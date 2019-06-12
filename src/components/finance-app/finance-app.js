import React from "react";
import ItemsPart from "../items-part/items-part";
import ExpensesBubleChart from "../buble-chart";
import DetailsSection from "../details-section/details-section";
const FinanceApp = () => {
  return (
    <div className="container-fluid finance-app-wrapper">
      <div className="row">
        <div className="col-12 col-lg-6">
          <ItemsPart />
        </div>
        <div className="col-12 col-lg-6">{<DetailsSection />}</div>
      </div>
      <div className="bubble">
        <ExpensesBubleChart />
      </div>
    </div>
  );
};
export default FinanceApp;
