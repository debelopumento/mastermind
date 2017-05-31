import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import Slot from "./slot";
import colors from "./colors";

class MainBoard extends PureComponent {
	state = {
		currentRowContent: [
			{ column: 0, content: 1 },
			{ column: 1, content: null },
			{ column: 2, content: 3 },
			{ column: 3, content: null }
		]
	};
	render() {
		const currentRowContent = this.state.currentRowContent;
		const currentRow = Object.keys(currentRowContent).map(index => {
			const slotContent = currentRowContent[index];
			const color = slotContent.content !== null
				? colors[slotContent.content]
				: "lightGrey";
			return (
				<input
					style={{
						margin: 10,
						width: 20,
						height: 20,
						backgroundColor: color,
						border: 0
					}}
					key={index}
				/>
			);
		});
		return <div>{currentRow}</div>;
	}
}

export default connect(
	storeState => ({
		activeGame: storeState.activeGame
	}),
	{
		registerPlayer: actions.registerPlayer
	}
)(MainBoard);
