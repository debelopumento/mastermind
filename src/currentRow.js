import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import colors from "./colors";
import CheckRowButton from "./checkRowButton";

class CurrentRow extends PureComponent {
	handleClick = event => {
		if (this.props.selectedNumber === 0) {
			alert("Please pick a color first!");
		} else {
			const updatedSlotIndex = event.target.id;
			let row = this.props.currentRow;
			row[updatedSlotIndex] = this.props.selectedNumber;

			this.props.updateCurrentRow(row);
			this.props.updateSelectedNumber("null");
			this.props.checkCurrenRow();
		}
	};

	render() {
		const currentRowContent = this.props.currentRow;
		const currentRow = Object.keys(currentRowContent).map(index => {
			const slotContent = currentRowContent[index];
			const color = slotContent !== null
				? colors[slotContent]
				: "lightGrey";
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
					key={index}
					id={index}
					onClick={this.handleClick}
				/>
			);
		});
		return (
			<div>
				<span>{currentRow}</span>

				<CheckRowButton />
			</div>
		);
	}
}

export default connect(
	storeState => ({
		selectedNumber: storeState.selectedNumber,
		currentRow: storeState.currentRow
	}),
	{
		updateCurrentRow: actions.updateCurrentRow,
		checkCurrenRow: actions.checkCurrenRow,
		updateSelectedNumber: actions.updateSelectedNumber
	}
)(CurrentRow);
