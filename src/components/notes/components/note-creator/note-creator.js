import React, { Component } from "react";

import "./note-creator.scss";
import DictateCheckbox from "react-dictate-button";
import NoteEditor from "../note-editor";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { database } from "../../../../firebase";
import { generateId } from "../../helpers";
import NotesPalette from "../notes-palette/notes-palette";

export default class NoteCreator extends Component {
  // state = {
  //   title: "",
  //   description: "",
  //   itemId: "1",
  //   tempSpeech: "",
  //   itemColor: "#4EC9B0",
  //   editorState: EditorState.createEmpty()
  // };
  state = this.props.itemId
    ? {}
    : {
        note_title: "",
        note_description: "",
        note_id: generateId(),
        tempSpeech: "",
        note_color: "#4EC9B0",
        note_tag: "",
        editorState: EditorState.createEmpty()
      };

  onEditorStateChange = editorState => {
    this.setState({ editorState });
  };
  setToDatabase() {
    const {
      note_title,
      note_description,
      note_id,
      note_color,
      note_tag,
      editorState
    } = this.state;
    let editorHTMLContent = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    let userRef = database.ref(`notes/${note_id}`);
    userRef.set({
      note_id,
      note_content: editorHTMLContent,
      note_title,
      note_description,
      note_tag,
      note_color
    });
  }

  clearState() {
    this.setState({
      note_title: "",
      note_description: "",
      note_id: generateId(),
      note_tag: "",
      tempSpeech: "",
      note_color: "#4EC9B0",
      editorState: EditorState.createEmpty()
    });
  }

  onColorChanged = value => {
    this.setState({
      note_color: value
    });
  };
  onTitleInput = e => {
    this.setState({
      note_title: e.target.value
    });
  };

  onDescriptionInput = e => {
    this.setState({
      note_description: e.target.value
    });
  };

  onNoteApply = () => {
    this.setToDatabase();
    this.clearState();
  };

  render() {
    const {
      note_title,
      note_description,
      note_id,
      note_color,
      note_tag,
      editorState
    } = this.state;

    return (
      <div>
        <div className="note-creator">
          <input
            type="text"
            className="notes-input"
            onChange={this.onTitleInput}
            value={note_title}
          />
          <DictateCheckbox
            onProgress={this.showDictationProgress}
            onDictate={this.getRecognition}
            lang="en-US"
          >
            start/stop
          </DictateCheckbox>
          <textarea
            className="notes-input notes-input--textarea"
            onChange={this.onDescriptionInput}
            value={note_description}
          />
          <NotesPalette
            onColorChanged={this.onColorChanged}
            activeColor={note_color}
          />
          <Editor
            editorState={editorState}
            onEditorStateChange={this.onEditorStateChange}
          />
          <button className="note-creator__apply" onClick={this.onNoteApply}>
            apply
          </button>
        </div>
      </div>
    );
  }
}

// export default class NoteCreator extends Component {
//   state = {
//     title: "",
//     description: "",
//     itemId: "1",
//     tempSpeech: "",
//     itemColor: "#4EC9B0",
//     editorState: EditorState.createEmpty()
//   };

//   onTitleInput = e => {
//     this.setState({
//       title: e.target.value
//     });
//   };
//   onDescriptionInput = e => {
//     this.setState({
//       description: e.target.value
//     });
//   };

//   generateId = () => {
//     const id =
//       "_" +
//       Math.random()
//         .toString(36)
//         .substr(2, 9);

//     this.setState({
//       itemId: id
//     });
//   };
//   clearState = () => {
//     this.setState({
//       title: "",
//       description: "",
//       itemId: ""
//     });
//   };
//   addItemToList = () => {
//     if (this.props.items) {
//       return [this.state, ...this.props.items];
//     } else {
//       return [this.state];
//     }
//   };
//   onColorChanged = e => {
//     this.setState({
//       itemColor: e.target.value
//     });
//   };
//   getRecognition = async speech => {
//     await this.setState({
//       description: speech.result.transcript
//     });
//   };
//   showDictationProgress = speech => {
//     if (speech.results) {
//       this.setState({
//         tempSpeech: speech.results[0].transcript
//       });
//     }
//   };
//   onItemAdd = async e => {
//     e.preventDefault();
//     await this.generateId();
//     if (this.state.title && this.state.description) {
//       await this.props.onUpdateItemList(this.addItemToList());
//       this.clearState();
//     } else {
//       console.log("заполните все поля");
//     }
//   };

//   render() {
//     let colors = [
//       "#B2AA9F",
//       "#ABDF79",
//       "#E6D3E3",
//       "#F8E9A5",
//       "#F8A9A9",
//       "#54B5E6",
//       "#4EC9B0",
//       "#A0C3FF",
//       "#D54E79"
//     ];
//     const { editorState, itemId } = this.state;
//     return (
//       <div className="note-creator">
//         <button
//           className="button note-creator__hide"
//           onClick={() => {
//             this.props.hideNotesCreator();
//           }}
//         >
//           close notes creator
//         </button>
//         <form className="notes-form" onSubmit={this.onItemAdd}>
//           <div>{this.state.tempSpeech}</div>
//           <input
//             type="text"
//             className="notes-input"
//             onChange={this.onTitleInput}
//             value={this.state.title}
//           />

//           <DictateCheckbox
//             onProgress={this.showDictationProgress}
//             onDictate={this.getRecognition}
//             lang="en-US"
//           >
//             start/stop
//           </DictateCheckbox>
//           <textarea
//             className="notes-input notes-input--textarea"
//             onChange={this.onDescriptionInput}
//             value={this.state.description}
//           />
//           <RadioGroup>
//             {colors.map((el, i) => {
//               return (
//                 <div
//                   className="colors__item"
//                   key={i}
//                   style={{ backgroundColor: el }}
//                 >
//                   <input
//                     className="radio-custom"
//                     id={el}
//                     type="radio"
//                     name="color"
//                     value={`${el}`}
//                     onChange={this.onColorChanged}
//                   />
//                   <label className="radio-custom-label" htmlFor={el} />
//                 </div>
//               );
//             })}
//           </RadioGroup>
//           <NoteEditor editorState={editorState} itemId={itemId} />

//           <button type="submit" className="notes-form__button">
//             Add
//           </button>
//         </form>
//       </div>
//     );
//   }
// }
