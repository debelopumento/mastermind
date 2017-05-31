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
					<input type="submit" onClick={this.handleSubmit} />
				</div>
			);
		}
		return (
			<div>

				<p>Hello, {this.props.playerName}</p>
				<span>Wins: {this.props.playerWins}</span>
				<span>Losses: {this.props.playerLosses}</span>
				<span>Remaining Guesses: {this.props.remainingGuesses}</span>
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
