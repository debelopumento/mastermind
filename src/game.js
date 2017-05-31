import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import MainBoard from "./mainBoard";
import ColorSelection from "./colorSelection";

class Game extends PureComponent {
	render() {
		if (this.props.activeGame) {
			return (
				<div>
					<MainBoard />
					<ColorSelection />
				</div>
			);
		}

		return <div />;
	}
}

export default connect(
	storeState => ({
		activeGame: storeState.activeGame
	}),
	{
		registerPlayer: actions.registerPlayer
	}
)(Game);
