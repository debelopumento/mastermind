import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";

class CheckRowButton extends PureComponent {
	submitRow = () => {
		this.props.submitRow();
	};

	render() {
		if (this.props.canSubmitRow) {
			return (
				<span>
					<button
						style={{
							width: 50,
							border: "1px solid #1A9C9C",
							color: "#1A9C9C",
							backgroundColor: "white"
						}}
						onClick={this.submitRow}
					>
						Submit
					</button>
				</span>
			);
		}
		return (
			<span>
				<button
					style={{
						width: 50,
						border: "1px solid #85CDCA",
						color: "#85CDCA",
						backgroundColor: "white"
					}}
					disabled="disabled"
				>
					Submit
				</button>
			</span>
		);
	}
}
export default connect(
	storeState => ({
		canSubmitRow: storeState.canSubmitRow
	}),
	{
		submitRow: actions.submitRow
	}
)(CheckRowButton);
