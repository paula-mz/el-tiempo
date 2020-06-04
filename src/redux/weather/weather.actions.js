import * as C from "./weather.constants";
export const weatherRequest = (payload) => ({
	type: C.WEATHER_REQUEST,
	payload,
});
export const weatherSuccess = (payload) => ({
	type: C.WEATHER_SUCCESS,
	payload,
});
export const weatherFailure = (payload) => ({
	type: C.WEATHER_FAILURE,
	payload,
});

export const weatherDelete = (payload) => ({
	type: C.WEATHER_DELETE,
	payload,
});