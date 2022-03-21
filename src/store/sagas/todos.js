import { takeLatest, all, call, put } from "redux-saga/effects";

import { CREATE_TODO, DELETE_TODO, EDIT_TODO, GET_TODOS } from "../actionTypes";
import {
  createTodo,
  deleteTodo,
  editTodo,
  getTodos,
} from "../../services/todos";
import {
  createTodoFailure,
  createTodoSuccess,
  deleteTodoFailure,
  deleteTodoSuccess,
  editTodoFailure,
  editTodoSuccess,
  getTodosFailure,
  getTodosSuccess,
} from "../actions";

function* getTodosSaga() {
  try {
    const { data } = yield call(getTodos);
    yield put(getTodosSuccess(data));
  } catch (error) {
    yield put(getTodosFailure(error));
  }
}

function* createTodoSaga({ payload }) {
  try {
    const { data } = yield call(createTodo, payload);
    yield put(createTodoSuccess(data));
  } catch (error) {
    yield put(createTodoFailure(error));
  }
}

function* editTodoSaga({ payload: { id, text, onSuccess } }) {
  try {
    const { data } = yield call(editTodo, id, text);
    yield put(editTodoSuccess(data));
    yield call(onSuccess);
  } catch (error) {
    yield put(editTodoFailure(error));
  }
}

function* deleteTodoSaga({ payload: { id } }) {
  try {
    const { data } = yield call(deleteTodo, id);
    yield put(deleteTodoSuccess(data));
  } catch (error) {
    yield put(deleteTodoFailure(error));
  }
}

export default function* todosSaga() {
  yield all([
    takeLatest(GET_TODOS.START, getTodosSaga),
    takeLatest(CREATE_TODO.START, createTodoSaga),
    takeLatest(EDIT_TODO.START, editTodoSaga),
    takeLatest(DELETE_TODO.START, deleteTodoSaga),
  ]);
}
