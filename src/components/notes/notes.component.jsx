import React, { Component } from "react";

import CardNoteComponent from "../noteCard/card-note.component";
import "./notes.scss";
export default class NotesComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="notes row">
        {this.props.notes.map((note, index) => {
          return (
            <li className="col-lg-2 col-12" key={index}>
              <CardNoteComponent
                title={note.title}
                text={note.text}
              ></CardNoteComponent>
            </li>
          );
        })}
      </ul>
    );
  }
}
