import { combineReducers } from "redux";

const playerIdReducer = (state = null, action) => {
	switch (action.type) {
		case "UPDATE_PLAYER_ID": {
			return action.payload;
		}
		default:
			return state;
	}
};

const playerNameReducer = (state = "name", action) => {
	switch (action.type) {
		case "UPDATE_PLAYER_NAME": {
			return action.payload;
		}
		default:
			return state;
	}
};

const playerWinsReducer = (state = 0, action) => {
	switch (action.type) {
		case "UPDATE_PLAYER_WINS": {
			return action.payload;
		}
		default:
			return state;
	}
};

const playerLossesReducer = (state = 0, action) => {
	switch (action.type) {
		case "UPDATE_PLAYER_LOSSES": {
			return action.payload;
		}
		default:
			return state;
	}
};

const activeGameReducer = (state = true, action) => {
	switch (action.type) {
		case "ACTIVATE_GAME": {
			return true;
		}
		default:
			return state;
	}
};

const selectedNumberReducer = (state = null, action) => {
	switch (action.type) {
		case "UPDATE_SELECTED_NUMBER": {
			return action.payload;
		}
		default:
			return state;
	}
};

const currentRowReducer = (state = [null, null, null, null], action) => {
	switch (action.type) {
		case "UPDATE_CURRENT_ROW": {
			return action.payload;
		}
		default:
			return state;
	}
};

const allReducers = combineReducers({
	playerId: playerIdReducer,
	playerName: playerNameReducer,
	playerWins: playerWinsReducer,
	playerLosses: playerLossesReducer,
	activeGame: activeGameReducer,
	selectedNumber: selectedNumberReducer,
	currentRow: currentRowReducer
});

export default allReducers;
