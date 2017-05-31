import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import MainBoard from "./mainBoard";
import colors from "./colors";

class HistoryRows extends PureComponent {
	render() {
		const roundNumber = 10 - this.props.remainingGuesses;

		if (roundNumber > 0) {
			const historyGuesses = this.props.historyGuesses;
			console.log(1, historyGuesses);

			const history = Object.keys(historyGuesses).map(index => {
				const rowNumber = roundNumber - Number(index);
				console.log(100, historyGuesses, rowNumber, roundNumber, index);
				const row = Object.keys(historyGuesses[index]).map(rowIndex => {
					const slotContent = historyGuesses[index][rowIndex];
					const color = colors[slotContent];
					return (
						<button
							style={{
								margin: 10,
								width: 20,
								height: 20,
								backgroundColor: color,
								border: 0,
								borderRadius: 30
							}}
							key={rowIndex}
						/>
					);
				});
				return <div key={index}>{row}</div>;
			});

			return (
				<div>
					{history}

				</div>
			);
		}

		return <div />;
	}
}

export default connect(
	storeState => ({
		remainingGuesses: storeState.remainingGuesses,
		historyGuesses: storeState.historyGuesses
	}),
	{
		submitRow: actions.submitRow
	}
)(HistoryRows);
