import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import CurrentRow from "./currentRow";
import HistoryRows from "./historyRows";
import EmptyRow from "./emptyRow";

class MainBoard extends PureComponent {
	render() {
		return (
			<div
				style={{
					width: 220,
					paddingLeft: 60,
					textAlign: "left",
					margin: "auto"
				}}
			>
				<EmptyRow />
				<CurrentRow />
				<HistoryRows />

			</div>
		);
	}
}

export default MainBoard;
