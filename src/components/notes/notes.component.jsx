import React, { Component } from "react";

import CardNoteComponent from "../noteCard/card-note.component";

export default class NotesComponent extends Component {
  render() {
    return (
      <ul>
        <li>
          <CardNoteComponent></CardNoteComponent>
        </li>
        <li>
          <CardNoteComponent></CardNoteComponent>
        </li>
      </ul>
    );
  }
}
