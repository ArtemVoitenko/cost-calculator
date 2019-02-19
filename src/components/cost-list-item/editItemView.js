import React from "react";
import InputGroup from "../input-group";

// import React, { Component } from "react";

// export default class EditItemView extends Component {
//   state = {
//     actionDate: this.props.actionDate,
//     actionName: this.props.actionName,
//     actionType: this.props.actionType,
//     actionSum: this.props.actionSum,
//     actionId: this.props.actionId,
//     onEdit: this.props.onEdit
//   };
//   onNameChange = e => {
//     this.setState({
//       actionName: e.target.value
//     });
//   };
//   render() {
//     const {
//       actionDate,
//       actionName,
//       actionType,
//       actionSum,
//       actionId
//     } = this.state;
//     return (
//       <form action="" className="item-edit">
//         <input
//           className="item-edit__name"
//           type="text"
//           value={actionName}
//           onChange={this.onNameChange}
//         />
//         <input
//           className="item-edit__sum"
//           type="text"
//           value={actionSum}
//           onChange={this.onSumChange}
//         />
//         <select
//           name="actionType"
//           onChange={this.onTypeChange}
//           value={actionType}
//         >
//           <option defaultValue="consumption">consumption</option>
//           <option value="income">income</option>
//         </select>

//         <button
//           className="btn btn-primary input-panel__button"
//           onClick={this.showCalendar}
//         >
//           {actionDate}
//         </button>
//         <div className={`input-panel__calendar ${isVisible}`}>
//           <Calendar onChange={this.onCalendarPick} />
//         </div>
//       </form>
//     );
//   }
// }
const EditItemView = ({ applyChange, ...props }) => {
  return <InputGroup state={props} view="edit" applyChange={applyChange} />;
};
export default EditItemView;
