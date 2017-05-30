import axios from "axios";
import store from "../store";

const baseUrl = "http://challenge.thebeans.io:3000/";

export const getAllPlayerStats = () => {
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
			console.log(data);
		})
		.catch(e => {
			console.log(e);
		});
};
