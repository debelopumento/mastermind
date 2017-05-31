import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";

class PlayerInfo extends PureComponent {
	state = {
		playerName: ""
	};

	handleChange = event => {
		const playerName = event.target.value;
		this.setState({ playerName });
	};

	_handleKeyPress = event => {
		if (event.key === "Enter") {
			this.handleSubmit();
		}
	};

	handleSubmit = event => {
		const playerName = this.state.playerName;
		this.props.registerPlayer(playerName);
	};

	render() {
		if (this.props.playerName === null) {
			return (
				<div>
					<p>Enter your name to start playing!</p>
					<input
						type="text"
						onChange={this.handleChange}
						onKeyPress={this._handleKeyPress}
					/>
					<input
						style={{
							margin: 5,
							width: 50,
							border: "0.5px dotted #1A9C9C",
							color: "#1A9C9C",
							backgroundColor: "white"
						}}
						type="submit"
						onClick={this.handleSubmit}
					/>
				</div>
			);
		}
		return (
			<div>
				<p>Hello, {this.props.playerName}</p>
				<span style={{ margin: 10 }}>
					Wins: {this.props.playerWins}
				</span>
				<span style={{ margin: 10 }}>
					Losses: {this.props.playerLosses}
				</span>
				<span style={{ margin: 10 }}>
					Remaining Guesses: {this.props.remainingGuesses}
				</span>
			</div>
		);
	}
}

export default connect(
	storeState => ({
		playerId: storeState.playerId,
		playerName: storeState.playerName,
		playerWins: storeState.playerWins,
		playerLosses: storeState.playerLosses,
		remainingGuesses: storeState.remainingGuesses
	}),
	{
		registerPlayer: actions.registerPlayer
	}
)(PlayerInfo);
