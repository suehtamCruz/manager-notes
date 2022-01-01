import "./App.scss";
import React, { Component } from "react";

import NewNoteComponent from "./components/new-note/new-note.component";
import NotesComponent from "./components/notes/notes.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      notes: [],
    };
  }

  createNote(title, text) {
    const newNote = {
      title,
      text,
    };

    const newArrayNotes = [...this.state.notes, newNote];

    const newState = {
      notes: newArrayNotes,
    };
    this.setState(newState);
  }

  render() {
    return (
      <main id="main-template">
        <NewNoteComponent
          createNote={this.createNote.bind(this)}
        ></NewNoteComponent>

        <NotesComponent notes={this.state.notes}></NotesComponent>
      </main>
    );
  }
}

export default App;
