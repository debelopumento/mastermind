import axios from "axios";

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
	return axios
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
		})
		.catch(e => {
			console.log(e);
		});
};

export const updateSelectedNumber = number => ({
	type: "UPDATE_SELECTED_NUMBER",
	payload: number
});
