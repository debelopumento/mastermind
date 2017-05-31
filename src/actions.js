import axios from "axios";
import store from "./store";

const baseUrl = "http://challenge.thebeans.io:3000/";

export const getAllPlayerStats = () => dispatch => {
	const url = baseUrl + "api/stats";
	axios
		.get(url)
		.then(data => {
			console.log(data);
		})
		.catch(e => {
			console.log(e);
		});
};

export const startNewGame = () => dispatch => {
	const playerId = store.getState().playerId;
	const newGameUrl = baseUrl + `api/player/${playerId}/new-game`;
	axios
		.post(newGameUrl)
		.then(gameData => {
			dispatch({
				type: "UPDATE_REMAINING_GUESSES",
				payload: 10
			});
			dispatch({
				type: "UPDATE_CORRECT_DIGITS",
				payload: 0
			});
			dispatch({
				type: "UPDATE_MISPLACED_DIGITS",
				payload: 0
			});
			dispatch({
				type: "UPDATE_HISTORY_GUESSES",
				payload: []
			});
			dispatch(resetCurrentRow());

			dispatch(disableRowSubmission());
		})
		.catch(e => {
			console.log(e);
		});
};

export const registerPlayer = name => dispatch => {
	const url = baseUrl + "api/player";
	const reqBody = { name: name };
	axios
		.post(url, reqBody)
		.then(data => {
			const playerId = data.data.playerId;
			dispatch({
				type: "UPDATE_PLAYER_ID",
				payload: playerId
			});
			dispatch({
				type: "UPDATE_PLAYER_NAME",
				payload: name
			});
			dispatch({
				type: "ACTIVATE_GAME",
				payload: null
			});
			dispatch(startNewGame());
		})
		.catch(e => {
			console.log(e);
		});
};

export const updateSelectedNumber = number => ({
	type: "UPDATE_SELECTED_NUMBER",
	payload: number
});

export const updateCurrentRow = input => ({
	type: "UPDATE_CURRENT_ROW",
	payload: input
});

export const resetCurrentRow = () => ({
	type: "RESET_CURRENT_ROW",
	payload: null
});

export const disableRowSubmission = () => ({
	type: "DISABLE_ROW_SUBMISSION",
	payload: null
});

export const submitRow = () => dispatch => {
	const playerId = store.getState().playerId;
	const row = store.getState().currentRow;
	const reqBody = {
		guess: row.join("")
	};
	const url = baseUrl + `api/player/${playerId}/guess`;
	console.log(reqBody);
	axios
		.post(url, reqBody)
		.then(data => {
			const remainingGuesses = data.data.remainingGuesses;
			if (remainingGuesses === 0) {
				alert("No more remaining guesses. Start New Game.");
				dispatch({
					type: "INCREMENT_PLAYER_LOSSES",
					payload: null
				});
				dispatch(startNewGame());
			} else {
				const correct = data.data.wasCorrect;
				if (correct) {
					alert("Correct Answer! Start New Game.");
					dispatch({
						type: "INCREMENT_PLAYER_WINS",
						payload: null
					});
					dispatch(startNewGame());
				} else {
					const correctDigits = data.data.correctDigits;
					const misplacedDigits = data.data.misplacedDigits;
					let historyGuesses = store.getState().historyGuesses;
					historyGuesses.unshift(row);
					let historyResults = store.getState().historyResults;
					historyResults.unshift({
						correctDigits: correctDigits,
						misplacedDigits: misplacedDigits
					});
					dispatch({
						type: "UPDATE_REMAINING_GUESSES",
						payload: remainingGuesses
					});
					dispatch({
						type: "UPDATE_CORRECT_DIGITS",
						payload: correctDigits
					});
					dispatch({
						type: "UPDATE_MISPLACED_DIGITS",
						payload: misplacedDigits
					});
					dispatch({
						type: "UPDATE_HISTORY_GUESSES",
						payload: historyGuesses
					});
					dispatch(resetCurrentRow());
					dispatch(disableRowSubmission());
				}
			}
		})
		.catch(e => {
			console.log(e);
		});
};

export const checkCurrenRow = () => dispatch => {
	const row = store.getState().currentRow;
	let canSubmitRow = true;
	row.forEach(slot => {
		if (slot === null) {
			canSubmitRow = false;
		}
	});
	if (canSubmitRow) {
		dispatch({
			type: "ENABLE_ROW_SUBMISSION",
			payload: null
		});
	}
};

export const enableRowSubmission = () => ({
	type: "ENABLE_ROW_SUBMISSION",
	payload: null
});
