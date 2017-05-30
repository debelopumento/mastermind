import { combineReducers } from "redux";

const playerNameReducer = (state = null, action) => {
	switch (action.type) {
		case "UPDATE_PLAYER_NAME": {
			return action.payload;
		}
		default:
			return state;
	}
};

const allReducers = combineReducers({
	playerName: playerNameReducer
});

export default allReducers;
