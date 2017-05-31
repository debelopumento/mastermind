import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";

class Slot extends PureComponent {
	render() {
		if (this.props.activeGame) {
			return <div>slot</div>;
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
)(Slot);
