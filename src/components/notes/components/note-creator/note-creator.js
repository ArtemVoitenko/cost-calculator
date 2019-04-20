import React, { Component } from "react";
import { RadioGroup, Radio } from "react-radio-group";
export default class NoteCreator extends Component {
  state = {
    title: "",
    description: "",
    itemId: ""
  };

  onTitleInput = e => {
    this.setState({
      title: e.target.value
    });
  };
  onDescriptionInput = e => {
    this.setState({
      description: e.target.value
    });
  };

  generateId = () => {
    const id =
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9);

    this.setState({
      itemId: id
    });
  };
  clearState = () => {
    this.setState({
      title: "",
      description: "",
      itemId: ""
    });
  };
  addItemToList = () => {
    if (this.props.items) {
      return [...this.props.items, this.state];
    } else {
      return [this.state];
    }
  };
  onItemAdd = e => {
    e.preventDefault();
    this.generateId();
    this.clearState();
    this.props.onUpdateItemList(this.addItemToList());

    console.log(localStorage.getItem("notes"));
  };

  render() {
    return (
      <form className="notes-form" onSubmit={this.onItemAdd}>
        <input
          type="text"
          className="notes-form__title"
          onChange={this.onTitleInput}
          value={this.state.title}
        />
        <textarea
          className="notes-form__text"
          onChange={this.onDescriptionInput}
          value={this.state.description}
        />
        <RadioGroup>
          <input
            type="text"
            id="#808080"
            value="#808080"
            className="notes-form__radio"
          />
          <label htmlFor="#808080" className="notes-from__label" />
          <input
            type="text"
            id="#008000"
            value="#008000"
            className="notes-form__radio"
          />
          <label htmlFor="#008000" className="notes-from__label" />
          <input
            type="text"
            id="#FF6347"
            value="#008000"
            className="notes-form__radio"
          />
          <label htmlFor="#FF6347" className="notes-from__label" />
          <input
            type="text"
            id="#FFFF00"
            value="#FFFF00"
            className="notes-form__radio"
          />
          <label htmlFor="#FFFF00" className="notes-from__label" />
          <input
            type="text"
            id="#FF0000"
            value="#FF0000"
            className="notes-form__radio"
          />
          <label htmlFor="#FF0000" className="notes-from__label" />
          <input
            type="text"
            id="#A52A2A"
            value="#A52A2A"
            className="notes-form__radio"
          />
          <label htmlFor="#A52A2A" className="notes-from__label" />
        </RadioGroup>
        <button className="notes-form__button">Add</button>
      </form>
    );
  }
}
