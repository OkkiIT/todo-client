import { all } from "redux-saga/effects";

import todosSaga from "./todos";
import tagsSaga from "./tags";

export default function* rootSaga() {
  yield all([todosSaga(), tagsSaga()]);
}
