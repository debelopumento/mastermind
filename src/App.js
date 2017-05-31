import React, { Component } from "react";
import "./App.css";
import PlayerInfo from "./playerInfo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Mastermind</h2>
        <PlayerInfo />
      </div>
    );
  }
}

export default App;
