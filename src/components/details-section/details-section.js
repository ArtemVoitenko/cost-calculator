import React, { Component } from "react";
import { connect } from "react-redux";
import Totals from "../totals";
import PurposesChart from "../purposes-chart";
import ItemInfo from "../item-info";
class DetailsSection extends Component {
  detailsBlock() {
    return this.props.actionId ? (
      <ItemInfo />
    ) : (
      <React.Fragment>
        <PurposesChart />
        <Totals />
      </React.Fragment>
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
