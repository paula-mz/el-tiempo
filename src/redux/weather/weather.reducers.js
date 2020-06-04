import * as C from "./weather.constants";

export const initialState = {
	townsSelected: [],
	error: null,
	loading: true,
};

export default (state = initialState, {
	type,
	payload
}) => {
	switch (type) {
		case C.WEATHER_REQUEST:
			return {
				...state,
				error: null,
					loading: true,
			};
		case C.WEATHER_SUCCESS:
			const selectTown = {
				name: payload.municipio.NOMBRE,
				id: payload.municipio.CODIGOINE.slice(0,5),
				description: payload.stateSky.description,
				temperature: payload.temperatura_actual,
				rain: payload.pronostico.hoy.prob_precipitacion
			}
			const newTowns = [...state.townsSelected, selectTown];
			return {
				...state,
				townsSelected: newTowns,
					error: null,
					loading: false,
			};
		case C.WEATHER_FAILURE:
			return {
				...state,
				error: payload,
					loading: false,
			};
		case C.WEATHER_DELETE:
			console.log(payload)
			const downTowns = state.townsSelected.filter(town => town.id !== payload);
			return {
				...state,
				townsSelected: downTowns,
					loading: false,
			};
		default:
			return state;
	}
};