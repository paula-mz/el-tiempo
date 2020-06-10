import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import reducers from "./reducers";
import townsSaga from "./towns/towns.saga";
import weatherSaga from "./weather/weather.saga";

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    typeof window === "object" &&
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

function* rootSaga() {
  yield all([townsSaga(), weatherSaga()]);
}

sagaMiddleware.run(rootSaga);
