import React, { Component } from "react";

export default class ResultComponent extends Component {
  render() {
    return (
      <div className="container resultComp">
        <h1>Result</h1>
        <div className="mainBox result">
          <h3 className="msg">You need more practice!</h3>
          <h1 className="score">Your score is 20%</h1>
          <div className="resultDetails">
            <div className="scoreRow">
              <div className="legend">Total number of questions</div>
              <div className="detailedScore">15</div>
            </div>
            <div className="scoreRow">
              <div className="legend">Number of attempted questions</div>
              <div className="detailedScore">9</div>
            </div>
            <div className="scoreRow">
              <div className="legend">Number of correct answers</div>
              <div className="detailedScore">3</div>
            </div>
            <div className="scoreRow">
              <div className="legend">Nmber of wrong answers</div>
              <div className="detailedScore">6</div>
            </div>
          </div>
        </div>
        <div className="endBtns">
          <button className="endBtn playAgain">Play Again</button>
          <button className="endBtn backToHome">Back to home</button>
        </div>
      </div>
    );
  }
}
