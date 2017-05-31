import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import Slot from "./slot";
import colors from "./colors";

class MainBoard extends PureComponent {
	handleClick = event => {
		if (this.props.selectedNumber === 0) {
			alert("Please pick a color first!");
		} else {
			const updatedSlotIndex = event.target.id;
			let row = this.props.currentRow;
			row[updatedSlotIndex] = this.props.selectedNumber;

			this.props.updateCurrentRow(row);
			this.props.updateSelectedNumber("null");
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
						border: 0
					}}
					key={index}
					id={index}
					onClick={this.handleClick}
				/>
			);
		});
		return <div>{currentRow}</div>;
	}
}

export default connect(
	storeState => ({
		selectedNumber: storeState.selectedNumber,
		currentRow: storeState.currentRow
	}),
	{
		updateCurrentRow: actions.updateCurrentRow,
		updateSelectedNumber: actions.updateSelectedNumber
	}
)(MainBoard);
