import * as C from "./towns.constants";
import utf8 from 'utf8';

export const initialState = {
  towns: [],
  error: null,
  loading: true,
};

export default (state = initialState, {
  type,
  payload
}) => {
  switch (type) {
    case C.TOWNS_REQUEST:
      return {
        ...state,
        error: null,
          loading: true,
      };
    case C.TOWNS_SUCCESS:
      const towns = payload.municipios.map(town => ({
        label: utf8.encode(town.NOMBRE),
        id: town.CODIGOINE.slice(0, 5)
      }));
      return {
        ...state,
        towns: towns,
          error: null,
          loading: false,
      };
    case C.TOWNS_FAILURE:
      return {
        ...state,
        error: payload,
          loading: false,
      };
    default:
      return state;
  }
};