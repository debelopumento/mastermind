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
			const historyResults = this.props.historyResults;
			const history = Object.keys(historyGuesses).map(index => {
				const historyGuessesRow = Object.keys(
					historyGuesses[index]
				).map(rowIndex => {
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
				const rowResult = historyResults[index];
				const blackPegCount = rowResult.correctDigits;
				const whitePegCount = rowResult.misplacedDigits;
				const emptySlotCount = 3 - blackPegCount - whitePegCount;
				let historyResultsRow = [];
				for (let i = 0; i <= emptySlotCount; i++) {
					historyResultsRow.push(
						<input
							style={{
								margin: 2,
								width: 5,
								height: 5,
								backgroundColor: "lightGrey",
								border: "lightGrey, solid, 1px",
								borderRadius: 30
							}}
							key={i}
						/>
					);
				}
				for (let i = 0; i <= whitePegCount; i++) {
					historyResultsRow.unshift(
						<input
							style={{
								margin: 2,
								width: 5,
								height: 5,
								backgroundColor: "white",
								border: "grey 1px solid",
								borderRadius: 30
							}}
							key={i + emptySlotCount}
						/>
					);
				}
				for (let i = 0; i <= blackPegCount; i++) {
					historyResultsRow.unshift(
						<input
							style={{
								margin: 2,
								width: 5,
								height: 5,
								backgroundColor: "black",
								border: "black solid 1px",
								borderRadius: 30
							}}
							key={i + emptySlotCount + whitePegCount}
						/>
					);
				}
				return (
					<div key={index}>
						<span>{historyGuessesRow}</span>
						<span>{historyResultsRow}</span>
					</div>
				);
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
		historyGuesses: storeState.historyGuesses,
		historyResults: storeState.historyResults
	}),
	{
		submitRow: actions.submitRow
	}
)(HistoryRows);
