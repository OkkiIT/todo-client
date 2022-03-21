import axios from "./index";

export const getTodos = async () => {
  const { data } = await axios.get("/todos");
  return data;
};

export const createTodo = async (todo) => {
  const { data } = await axios.post("/todos", todo);

  return data;
};

export const deleteTodo = async (todoId) => {
  const { data } = await axios.delete(`/todos/${todoId}`);

  return data;
};

export const editTodo = async (todoId, newTodo) => {
  const { data } = await axios.put(`/todos/${todoId}`, { text: newTodo });

  return data;
};
