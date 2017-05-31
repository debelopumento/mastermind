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
			const newGameUrl = baseUrl + `api/player/${playerId}/new-game`;
			axios
				.post(newGameUrl)
				.then(gameData => {
					console.log(gameData);
				})
				.catch(e => {
					console.log(e);
				});
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
			console.log(data);
			const correct = data.data.wasCorrect;
			const correctDigits = data.data.correctDigits;
			const misplacedDigits = data.data.misplacedDigits;
			console.log(222, correctDigits, misplacedDigits);
			dispatch({
				type: "REDUCE_REMAINING_GUESSES",
				payload: null
			});
			dispatch({
				type: "UPDATE_CORRECT_DIGITS",
				payload: correctDigits
			});
			dispatch({
				type: "UPDATE_MISPLACED_DIGITS",
				payload: misplacedDigits
			});
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
