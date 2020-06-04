import { call, put, takeLatest } from "redux-saga/effects";
import * as C from "./weather.constants";
import * as api from "../../utils/api";
import * as A from "./weather.actions";

function* weatherEffect({payload}) {
  try {
	const response = yield call(api.getTownData, payload);
    yield put(A.weatherSuccess(response));
  } catch (e) {
    console.error(e);
    yield put(A.weatherFailure("No hay información disponible"));
  }
}

export default function* weatherSagas() {
  yield takeLatest(C.WEATHER_REQUEST, weatherEffect);
}