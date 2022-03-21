import { combineReducers } from "redux";

import todoList from "./todoList";
import tagList from "./tags";

const rootReducer = combineReducers({
  todos: todoList,
  tags: tagList,
});

export default rootReducer;
