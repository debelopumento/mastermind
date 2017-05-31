import { combineReducers } from "redux";

const playerIdReducer = (
	state = "7490a8de-f54e-4c3a-ba92-ebf69a6a5fe0",
	//state = null,
	action
) => {
	switch (action.type) {
		case "UPDATE_PLAYER_ID": {
			return action.payload;
		}
		default:
			return state;
	}
};

const playerNameReducer = (state = "Di", action) => {
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

const remainingGuessesReducer = (state = 10, action) => {
	switch (action.type) {
		case "REDUCE_REMAINING_GUESSES": {
			const remainingGuesses = state - 1;
			return remainingGuesses;
		}
		default:
			return state;
	}
};

const canSubmitRowReducer = (state = false, action) => {
	switch (action.type) {
		case "ENABLE_ROW_SUBMISSION": {
			return true;
		}
		default:
			return state;
	}
};

const correctDigitsReducer = (state = 0, action) => {
	switch (action.type) {
		case "UPDATE_CORRECT_DIGITS": {
			return action.payload;
		}
		default:
			return state;
	}
};

const misplacedDigitsReducer = (state = 0, action) => {
	switch (action.type) {
		case "UPDATE_MISPLACED_DIGITS": {
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
	currentRow: currentRowReducer,
	remainingGuesses: remainingGuessesReducer,
	canSubmitRow: canSubmitRowReducer,
	correctDigits: correctDigitsReducer,
	misplacedDigits: misplacedDigitsReducer
});

export default allReducers;
