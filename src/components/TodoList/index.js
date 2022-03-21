import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todosListSelector } from "../../store/selectors/todosList";
import Todo from "../Todo";
import { getTodos } from "../../store/actions";
import { tagsListSelector } from "../../store/selectors/tagsList";
import { TodoListContainer } from "./styled";

const TodosList = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector(todosListSelector);
  const { searchTag } = useSelector(tagsListSelector);
  const { isSearchTagActive } = useSelector(tagsListSelector);
  useEffect(() => {
    dispatch(getTodos());
  }, []);

  const renderTodos = (todos) => {
    return todos.map((todo) => <Todo key={todo.id} todo={todo} />);
  };

  if (todos.length < 1) {
    return <h1>You haven't current tasks</h1>;
  }

  return (
    <TodoListContainer>
      {isSearchTagActive
        ? renderTodos(todos.filter((todo) => todo.text.includes(searchTag)))
        : renderTodos(todos)}
    </TodoListContainer>
  );
};

export default TodosList;
