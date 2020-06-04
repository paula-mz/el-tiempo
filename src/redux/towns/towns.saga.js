import { call, put, takeLatest } from "redux-saga/effects";
import * as C from "./towns.constants";
import * as api from "../../utils/api";
import * as A from "./towns.actions";

function* townsEffect() {
  try {
	const response = yield call(api.getTowns);
    yield put(A.townsSuccess(response));
  } catch (e) {
    console.error(e);
    yield put(A.townsFailure("Error al obtener los municipios"));
  }
}

export default function* townsSagas() {
  yield takeLatest(C.TOWNS_REQUEST, townsEffect);
}