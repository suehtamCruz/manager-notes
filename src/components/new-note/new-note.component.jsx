import React, { Component } from "react";

import "./new-note.scss";
export default class NewNoteComponent extends Component {
  createNewNote() {
    console.log("action");
  }

  render() {
    return (
      <form onSubmit={this.createNewNote()} id="new-note">
        <input type="text" placeholder="Título" />

        <textarea placeholder="Escreva sua nota aqui..."></textarea>

        <button type="submit">Criar nota</button>
      </form>
    );
  }
}
