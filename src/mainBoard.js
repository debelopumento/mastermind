import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import CurrentRow from "./currentRow";
import HistoryRows from "./historyRows";

class MainBoard extends PureComponent {
	render() {
		return (
			<div>

				<CurrentRow />
				<HistoryRows />
			</div>
		);
	}
}

export default MainBoard;
