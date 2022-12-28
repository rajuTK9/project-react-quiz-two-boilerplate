import React, { Component } from "react";
import questions from "../resources/quizQuestion.json";

export default class QuizComponent extends Component {
  constructor() {
    super();
    this.state = {
      i: 0,
    };
  }

  next = () => {
    if (this.state.i < questions.length - 1) {
      this.setState({ i: this.state.i + 1 });
    }
  };
  prev = () => {
    if (this.state.i > 0) {
      this.setState({ i: this.state.i - 1 });
    }
  };
  quit() {
    alert("Are you sure you want to quit ?");
  }

  render() {
    return (
      <div className="container">
        <div className="mainBox">
          <div className="counter">{this.state.i + 1} of 15</div>
          <h1>Question</h1>
          <p className="question">{questions[this.state.i].question}</p>
          <div className="options">
            <button className="mcq btn" id="a">
              {questions[this.state.i].optionA}
            </button>
            <button className="mcq btn" id="b">
              {questions[this.state.i].optionB}
            </button>
            <button className="mcq btn" id="c">
              {questions[this.state.i].optionC}
            </button>
            <button className="mcq btn" id="d">
              {questions[this.state.i].optionD}
            </button>
          </div>
          <div className="controllers">
            <button className="btn prev" onClick={this.prev}>
              Previous
            </button>
            <button className="btn nxt" onClick={this.next}>
              Next
            </button>
            <button className="btn quit" onClick={this.quit}>
              Quit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
