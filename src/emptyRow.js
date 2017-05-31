import React, { PureComponent } from "react";
import { connect } from "react-redux";
import "./index.css";

class EmptyRow extends PureComponent {
	render() {
		const emptyRowCount = this.props.remainingGuesses - 1;
		let emptyRows = [];
		let buttons = [];
		for (let j = 0; j < 4; j++) {
			buttons.push(
				<button
					key={j}
					style={{
						margin: 10,
						width: 20,
						height: 20,
						backgroundColor: "white",
						border: "1px dotted grey",
						borderRadius: 30
					}}
				/>
			);
		}
		for (let i = 0; i < emptyRowCount; i++) {
			emptyRows.push(
				<div key={i}>
					{buttons}

				</div>
			);
		}
		return (
			<div>
				{emptyRows}
			</div>
		);
	}
}

export default connect(storeState => ({
	remainingGuesses: storeState.remainingGuesses
}))(EmptyRow);
