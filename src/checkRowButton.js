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
					<button onClick={this.submitRow}>
						Submit
					</button>
				</span>
			);
		}
		return (
			<span>
				<button disabled="disabled">
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
