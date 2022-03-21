import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { deleteTodo, editTodo } from "../../store/actions";
import { renderHighlightedText } from "../../utils";
import { InputWithHighlight } from "../../components";
import { ButtonsContainers, TodoContainer } from "./styled";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const [inEditMode, setInEditMode] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const switchEditMode = () => setInEditMode((prevState) => !prevState);

  const dispatchTodoEdit = () =>
    dispatch(
      editTodo({
        id: todo.id,
        text: inputRef.current.value,
        onSuccess: onSuccessEdit,
      })
    );
  const onSuccessEdit = () => {
    setInEditMode(false);
  };
  const dispatchTodoDelete = () => dispatch(deleteTodo({ id: todo.id }));

  const cancelTextEdit = () => {
    inputRef.current.value = todo.text;
    switchEditMode();
  };

  const onChange = () => {
    setEditedText(inputRef.current.value);
  };

  return (
    <TodoContainer>
      {inEditMode ? (
        <InputWithHighlight
          inputRef={inputRef}
          text={editedText}
          onChange={onChange}
        />
      ) : (
        <>{renderHighlightedText(todo.text)}</>
      )}
      {inEditMode ? (
        <ButtonsContainers>
          <button onClick={dispatchTodoEdit}>Confirm</button>
          <button onClick={cancelTextEdit}>Cancel</button>
        </ButtonsContainers>
      ) : (
        <ButtonsContainers>
          <button onClick={switchEditMode}>Edit</button>
          <button onClick={dispatchTodoDelete}>Delete</button>
        </ButtonsContainers>
      )}
    </TodoContainer>
  );
};

export default Todo;
