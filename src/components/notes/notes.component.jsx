import React, { Component } from "react";

import CardNoteComponent from "../noteCard/card-note.component";
import "./notes.scss";
export default class NotesComponent extends Component {
  render() {
    return (
      <ul className="notes">
        <li className="col-lg-2 col-12">
          <CardNoteComponent></CardNoteComponent>
        </li>
        <li>
          <CardNoteComponent></CardNoteComponent>
        </li>
      </ul>
    );
  }
}
