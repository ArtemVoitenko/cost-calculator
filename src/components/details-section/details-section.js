import React, { Component } from "react";
import { connect } from "react-redux";
import PurposesChart from "../purposes-chart";
import ItemInfo from "../item-info";
import "./details-section.scss";
import SpheresStatisticContainer from "../spheres-statistic/spheres-statistic-container";
class DetailsSection extends Component {
  detailsBlock() {
    return this.props.actionId ? (
      <ItemInfo />
    ) : (
      <div className="details-section">
        <React.Fragment>
          <PurposesChart />
          <SpheresStatisticContainer />
        </React.Fragment>
      </div>
    );
  }
  render() {
    return this.detailsBlock();
  }
}

const mapStateToProps = ({ actionId }) => {
  return { actionId };
};

export default connect(mapStateToProps)(DetailsSection);
