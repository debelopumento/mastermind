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

const playerNameReducer = (state = null, action) => {
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

const activeGameReducer = (state = false, action) => {
	switch (action.type) {
		case "ACTIVATE_GAME": {
			return true;
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
	activeGame: activeGameReducer
});

export default allReducers;
