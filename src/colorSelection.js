import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import colors from "./colors";

class ColorSelection extends PureComponent {
	handleClick = event => {
		this.props.updateSelectedNumber(event.target.id);
	};
	render() {
		const colorChoices = Object.keys(colors).map(index => {
			const color = colors[index];
			return (
				<button
					key={index}
					id={index}
					onClick={this.handleClick}
					style={{
						margin: 10,
						width: 20,
						height: 20,
						backgroundColor: color,
						border: 0,
						borderRadius: 30
					}}
				/>
			);
		});
		return (
			<div>
				<div>{colorChoices}</div>
				<div>
					Selected color: <button
						style={{
							margin: 10,
							width: 50,
							height: 50,
							backgroundColor: colors[this.props.selectedNumber],
							border: 0,
							borderRadius: 30
						}}
					/>
				</div>
			</div>
		);
	}
}

export default connect(
	storeState => ({
		selectedNumber: storeState.selectedNumber
	}),
	{
		updateSelectedNumber: actions.updateSelectedNumber
	}
)(ColorSelection);
