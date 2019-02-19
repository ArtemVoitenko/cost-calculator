import React, { Component } from "react";
import "./input-panel.scss";
import InputGroup from "../input-group";
class ItemCreator extends Component {
  convertDate = date => {
    const day = () => {
      if (date.getDate() < 10) {
        return `0${date.getDate()}`;
      }
      return date.getDate();
    };
    const month = () => {
      if (date.getMonth() < 10) {
        return `0${date.getMonth() + 1}`;
      }
      return date.getMonth() + 1;
    };
    const year = date.getFullYear();
    return `${day()}.${month()}.${year}`;
  };

  state = {
    actionName: "",
    actionType: "consumption",
    actionSum: "",
    actionDate: this.convertDate(new Date()),
    actionId: ""
  };

  render() {
    const emptyState = this.state;
    return <InputGroup state={emptyState} view="item-creator" />;
  }
}

export default ItemCreator;

// onNameInput = e => {
//   const actionName = e.target.value;
//   this.setState(({ actionData }) => {
//     return {
//       actionData: { ...actionData, actionName }
//     };
//   });
// };
// onTypeChange = e => {
//   const actionType = e.target.value;
//   this.setState(({ actionData }) => {
//     return {
//       actionData: { ...actionData, actionType }
//     };
//   });
// };
// onSumInput = e => {
//   const sum = e.target.value;
//   this.setState(({ actionData }) => {
//     return {
//       actionData: { ...actionData, actionSum: sum }
//     };
//   });
// };
// showCalendar = () => {
//   this.setState({
//     calendarVisibility: !this.state.calendarVisibility
//   });
// };
// onCalendarPick = date => {
//   var convertedData = this.convertDate(date);
//   this.setState(({ actionData }) => {
//     return {
//       actionData: { ...actionData, actionDate: convertedData },
//       calendarVisibility: false
//     };
//   });
// };
// render() {
//   const {
//     calendarVisibility,
//     actionData: { actionName, actionSum, actionType, actionDate }
//   } = this.state;
//   const isVisible = calendarVisibility ? "active" : "";
//   return (
//     <div className="input-panel">
//       <form action="#" className="input-panel__form">
//         <input
//           className="input-panel__input"
//           onChange={this.onNameInput}
//           value={actionName}
//           placeholder="type header"
//           type="text"
//         />
//         <input
//           className="input-panel__input"
//           onChange={this.onSumInput}
//           value={actionSum}
//           placeholder="Enter sum"
//           type="text"
//         />
//         <select
//           name="actionType"
//           id="actionTypeSelect"
//           onChange={this.onTypeChange}
//           value={actionType}
//         >
//           <option defaultValue="consumption">consumption</option>
//           <option value="income">income</option>
//         </select>
//         <div className="input-panel__calendar-wrapper">
//           <button
//             className="btn btn-primary input-panel__button"
//             onClick={this.showCalendar}
//           >
//             {actionDate}
//           </button>
//           <div className={`input-panel__calendar ${isVisible}`}>
//             <Calendar onChange={this.onCalendarPick} />
//           </div>
//         </div>

//         <button
//           className="input-panel__submit"
//           type="button"
//           onClick={this.onSubmit}
//         >
//           ok
//         </button>
//       </form>
//     </div>
//   );
// }
