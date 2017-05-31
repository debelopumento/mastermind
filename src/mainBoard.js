import React, { PureComponent } from "react";
import CurrentRow from "./currentRow";
import HistoryRows from "./historyRows";
import EmptyRow from "./emptyRow";

class MainBoard extends PureComponent {
	render() {
		//The board is devided into three parts:
		//the empty part above the active row
		//and the history rows below the active row
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
