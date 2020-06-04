import * as C from "./towns.constants";

export const townsRequest = (payload) => ({
	type: C.TOWNS_REQUEST,
	payload,
});
export const townsSuccess = (payload) => ({
	type: C.TOWNS_SUCCESS,
	payload,
});
export const townsFailure = (payload) => ({
	type: C.TOWNS_FAILURE,
	payload,
});