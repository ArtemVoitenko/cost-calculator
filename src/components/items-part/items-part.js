import React, { Component } from "react";
import ItemCreator from "../item-creator";
import CostList from "../cost-list";
import DateLine from "../date-line";
import "./items-part.scss";
import FilterSection from "../filter-section";
import { connect } from "react-redux";
import { changeItemCreatorVisibility } from "../../actions";

class ItemsPart extends Component {
  toggleItemCreator = () => {
    console.log(this.props);
    this.props.changeCreatorVisibility();
  };
  render() {
    const itemCreatorOrList = this.props.creatorVisibility ? (
      <ItemCreator />
    ) : (
      <CostList />
    );

    return (
      <div class="items-part">
        <DateLine
          toggleItemCreator={this.toggleItemCreator}
          opened={this.props.creatorVisibility}
        />
        {itemCreatorOrList}
        <FilterSection />
      </div>
    );
  }
}

const mapStateToProps = ({ itemCreatorVisibility }) => {
  return {
    creatorVisibility: itemCreatorVisibility
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeCreatorVisibility: () => {
      dispatch(changeItemCreatorVisibility());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsPart);
