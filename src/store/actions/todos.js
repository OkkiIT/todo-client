import { CREATE_TODO, DELETE_TODO, EDIT_TODO, GET_TODOS } from "../actionTypes";

export const getTodos = () => ({
  type: GET_TODOS.START,
});

export const getTodosSuccess = (payload) => ({
  type: GET_TODOS.SUCCESS,
  payload,
});

export const getTodosFailure = (payload) => ({
  type: GET_TODOS.FAILURE,
  payload,
});

export const createTodo = (payload) => ({
  type: CREATE_TODO.START,
  payload,
});

export const createTodoSuccess = (payload) => ({
  type: CREATE_TODO.SUCCESS,
  payload,
});

export const createTodoFailure = (payload) => ({
  type: CREATE_TODO.FAILURE,
  payload,
});

export const deleteTodo = (payload) => ({
  type: DELETE_TODO.START,
  payload,
});

export const deleteTodoSuccess = (payload) => ({
  type: DELETE_TODO.SUCCESS,
  payload,
});

export const deleteTodoFailure = (payload) => ({
  type: DELETE_TODO.FAILURE,
  payload,
});

export const editTodo = (payload) => ({
  type: EDIT_TODO.START,
  payload,
});

export const editTodoSuccess = (payload) => ({
  type: EDIT_TODO.SUCCESS,
  payload,
});

export const editTodoFailure = (payload) => ({
  type: EDIT_TODO.FAILURE,
  payload,
});
