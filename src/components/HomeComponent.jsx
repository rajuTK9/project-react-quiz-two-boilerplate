import React, { Component } from "react";
import "../index.css";

export default class HomeComponent extends Component {
  render() {
    return (
      <div className="container">
        <h2>Quiz App</h2>
        <button className="play btn">Play</button>
      </div>
    );
  }
}
