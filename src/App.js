import React, { Component } from "react";
import PlayerInfo from "./playerInfo";
import Game from "./game";

class App extends Component {
	render() {
		return (
			<div>
				<h2>Mastermind</h2>
				<PlayerInfo />
				<Game />
			</div>
		);
	}
}

export default App;
