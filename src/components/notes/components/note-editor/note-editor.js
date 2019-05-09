import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { convertToRaw } from "draft-js";
import { database } from "../../../../firebase";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

// export default class NoteEditor extends Component {
//   state = {
//     editorState: this.props.editorState
//   };
//   onEditorStateChange = editorState => {
//     this.setState({
//       editorState
//     });
//   };
//   addNote = () => {
//     console.log("stor");
//     let editorHTMLContent = draftToHtml(
//       convertToRaw(this.state.editorState.getCurrentContent())
//     );
//     let userRef = database.ref(`users/${this.props.itemId}`);
//     userRef.set({ editorContent: editorHTMLContent });
//   };
//   render() {
//     const { editorState } = this.state;
//     return (
//       <React.Fragment>
//         <Editor onEditorStateChange={this.onEditorStateChange} />
//         <textarea
//           value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
//         />
//         <button className="editor-apply" onClick={this.addNote}>
//           apply
//         </button>
//       </React.Fragment>
//     );
//   }
// }
