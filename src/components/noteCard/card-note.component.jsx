import React, { Component } from "react";
import "./card-note.scss";
export default class CardNoteComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="card-note">
        <h3>{this.props.title}</h3>

        <p>{this.props.text}</p>
      </section>
    );
  }
}
