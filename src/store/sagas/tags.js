import { CREATE_TAG, DELETE_TAG, EDIT_TAG, GET_TAGS } from "../actionTypes";
import { createTag, deleteTag, editTag, getTags } from "../../services/tags";
import {
  getTagsFailure,
  getTagsSuccess,
  editTagFailure,
  editTagSuccess,
  deleteTagFailure,
  deleteTagSuccess,
  createTagFailure,
  createTagSuccess,
} from "../actions";
import { all, call, put, takeLatest } from "redux-saga/effects";

function* getTagsSaga() {
  try {
    const { data } = yield call(getTags);
    yield put(getTagsSuccess(data));
  } catch (error) {
    yield put(getTagsFailure(error));
  }
}

function* createTagSaga({ payload }) {
  try {
    const { data } = yield call(createTag, payload);
    yield put(createTagSuccess(data));
  } catch (error) {
    yield put(createTagFailure(error));
  }
}

function* editTagSaga({ payload: { id, text } }) {
  try {
    const { data } = yield call(editTag, id, text);
    yield put(editTagSuccess(data));
  } catch (error) {
    yield put(editTagFailure(error));
  }
}

function* deleteTagSaga({ payload: { id } }) {
  try {
    const { data } = yield call(deleteTag, id);
    yield put(deleteTagSuccess(data));
  } catch (error) {
    yield put(deleteTagFailure(error));
  }
}

export default function* tagsSaga() {
  yield all([
    takeLatest(GET_TAGS.START, getTagsSaga),
    takeLatest(EDIT_TAG.START, editTagSaga),
    takeLatest(DELETE_TAG.START, deleteTagSaga),
    takeLatest(CREATE_TAG.START, createTagSaga),
  ]);
}
