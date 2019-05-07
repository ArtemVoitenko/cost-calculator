import React, { Component } from "react";
import { RadioGroup, Radio } from "react-radio-group";
import "./note-creator.scss";
import DictateCheckbox from "react-dictate-button";
export default class NoteCreator extends Component {
  state = {
    title: "",
    description: "",
    itemId: "",
    tempSpeech: "",
    itemColor: "#4EC9B0"
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
      return [this.state, ...this.props.items];
    } else {
      return [this.state];
    }
  };
  onColorChanged = e => {
    this.setState({
      itemColor: e.target.value
    });
  };
  getRecognition = async speech => {
    await this.setState({
      description: speech.result.transcript
    });
  };
  showDictationProgress = speech => {
    if (speech.results) {
      this.setState({
        tempSpeech: speech.results[0].transcript
      });
    }
  };
  onItemAdd = async e => {
    e.preventDefault();
    await this.generateId();
    if (this.state.title && this.state.description) {
      await this.props.onUpdateItemList(this.addItemToList());
      this.clearState();
    } else {
      console.log("заполните все поля");
    }

    // console.log(localStorage.getItem("notes"));
  };

  render() {
    let colors = [
      "#B2AA9F",
      "#ABDF79",
      "#E6D3E3",
      "#F8E9A5",
      "#F8A9A9",
      "#54B5E6",
      "#4EC9B0",
      "#A0C3FF",
      "#D54E79"
    ];
    return (
      <div className="note-creator">
        <button
          className="button note-creator__hide"
          onClick={() => {
            this.props.hideNotesCreator();
          }}
        >
          close notes creator
        </button>
        <form className="notes-form" onSubmit={this.onItemAdd}>
          <div>{this.state.tempSpeech}</div>
          <input
            type="text"
            className="notes-form__title"
            onChange={this.onTitleInput}
            value={this.state.title}
          />

          <DictateCheckbox
            onProgress={this.showDictationProgress}
            onDictate={this.getRecognition}
            lang="en-US"
          >
            start/stop
          </DictateCheckbox>
          <textarea
            className="notes-form__text"
            onChange={this.onDescriptionInput}
            value={this.state.description}
          />
          <RadioGroup>
            {colors.map((el, i) => {
              return (
                <div
                  className="colors__item"
                  key={i}
                  style={{ backgroundColor: el }}
                >
                  <input
                    className="radio-custom"
                    id={el}
                    type="radio"
                    name="color"
                    value={`${el}`}
                    onChange={this.onColorChanged}
                  />
                  <label className="radio-custom-label" htmlFor={el} />
                </div>
              );
            })}
          </RadioGroup>
          <button type="submit" className="notes-form__button">
            Add
          </button>
        </form>
      </div>
    );
  }
}
