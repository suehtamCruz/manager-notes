import React, { Component } from "react";

export default class NewNoteComponent extends Component {
  createNewNote() {
    console.log("action");
  }

  render() {
    return (
      <form onSubmit={this.createNewNote()}>
        <input type="text" />

        <textarea placeholder="Escreva sua nota aqu"></textarea>

        <button type="submit">Criar nota</button>
      </form>
    );
  }
}
