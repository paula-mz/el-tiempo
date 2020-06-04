import { combineReducers } from "redux";
import townsReducer from "./towns/towns.reducers";
import weatherReducer from "./weather/weather.reducers";

export default combineReducers({
  towns: townsReducer,
  weather: weatherReducer,
});