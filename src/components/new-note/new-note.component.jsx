import React, { Component } from "react";

import "./new-note.scss";
export default class NewNoteComponent extends Component {
  constructor(props) {
    super(props);

    this.titleNote = "";
    this.textNote = "";

    this.inputRef = React.createRef();
    this.textAreaRef = React.createRef();
  }
  createNewNote(event) {
    event.preventDefault();
    event.stopPropagation();

    this.props.createNote(this.titleNote, this.textNote);

    this.textAreaRef.value = "";
    this.inputRef.value = "";
  }

  handleChangeInputValue(event) {
    this.titleNote = event.target.value;
  }

  handleChangeTextNote(event) {
    this.textNote = event.target.value;
  }

  render() {
    return (
      <form onSubmit={this.createNewNote.bind(this)} id="new-note">
        <input
          type="text"
          placeholder="Título"
          onChange={this.handleChangeInputValue.bind(this)}
          ref={(el) => (this.inputRef = el)}
        />

        <textarea
          placeholder="Escreva sua nota aqui..."
          onChange={this.handleChangeTextNote.bind(this)}
          ref={(el) => (this.textAreaRef = el)}
        ></textarea>

        <button type="submit">Criar nota</button>
      </form>
    );
  }
}
